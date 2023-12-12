import { Component, Directive, EventEmitter, HostBinding, HostListener, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { DashboardChartsData, IChartProps } from '../dashboard/dashboard-charts-data';

import {EventService} from '../../Services/eventService'
import { FormBuilder, FormGroup } from '@angular/forms';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

interface EventClaimResponse {
  id: number;
  eventId: string;
  claimType: string;
  incidentDate: string;
  incidentDescription: string;
  // Add other properties if needed

}
@Component({
  templateUrl: 'AddClaim.component.html',
  styleUrls: ['AddClaim.component.scss']
})


export class AddClaimComponent implements OnInit {
  constructor(private snackBar: MatSnackBar,private fb: FormBuilder,private eventService: EventService,private chartsData: DashboardChartsData) {
    this.form = this.fb.group({
      eventId: '',
      claimType: '',
      incidentDate: '',
      incidentDescription: ''
    });
    this.formex = this.fb.group({
      exchangeProgramId: '',
      claimType: '',
      claimDetails: '',
    });
    this.formblog = this.fb.group({
      postTitle: '',
      postURL: '',
      postPublicationDate: '',
      claimDescription:'',
      claimType:''
    });
    this.formpart = this.fb.group({
      partnershipId: '',
      partnerName: '',
      claimDetails: '',
      partnershipDescription:''
    });
  }
  
  formpart: FormGroup;
  formblog : FormGroup;
  form: FormGroup;
  formex: FormGroup;
  selectedFormId: string  = "eventForm";
  selectedEventClaim : string ="";
  selectedEventClaimType : string ="";
  incidentDate: Date | undefined;
  incidentDescription: string="";
  events: string[] = ['Event 1', 'Event 2', 'Event 3'];  
  exchangePrograms: string[] = ['Exchange program 1', 'Exchange program 2', 'Exchange program 3'];  
  types: string[] = ['Organization', 'Staff', 'Participation','Other'];  
  exchangeProgramsClaims : string [] = ['Travel expenses','Accommodation costs','Visa and passport fees (if applicable)','Health insurance costs(if applicable)','Transportation within the host country','Program fees or tuition','Other'];
  BlogClaims : string[] = ['Racism','Language violation','Irrelevancy','Other'];
  partnerships : string [] = ['partnership 1','partnership 2','partnership 3']

  selectedEvent: string ="Select an Event";
  showEventOptions = false;
  uploadedFiles: File[] = [];
  public files: any[] = []; 


  openSuccessSnackBar() {
    this.snackBar.open('Claim saved successfully', 'OK', {
      duration: 3000, // Adjust the duration as needed
    });
  }
  submitForm() {
    console.log(this.form.value);
   
    this.eventService.submitEventClaim(this.form.value)
      .subscribe(   (response: any) => {
        console.log(response.id)
        const data = response;
        console.log(data.id)
        console.log(this.uploadedFiles);
        if (this.uploadedFiles.length>1){
        this.eventService.uploadFiles(data.id, this.uploadedFiles).subscribe(
          (response) => {
            
            console.log(response);
            
            this.uploadedFiles = [];
          },
          (error) => {
            
            console.error(error);
          }
        );
        }
        this.openSuccessSnackBar(); 
            this.form.reset(); 
      },
      error => {
        console.error('Error:', error);
        // Handle the error (e.g., show an error message to the user)
      }
      );
      
  }
  submitFormex() {
    console.log(this.formex.value);
   
    this.eventService.submitExchangeProgramClaim(this.formex.value)
      .subscribe(   (response: any) => {
        console.log(response.id)
        const data = response;
        console.log(data.id)
        console.log(this.uploadedFiles);
        if (this.uploadedFiles.length>0){
        this.eventService.uploadFilesEX(data.id, this.uploadedFiles).subscribe(
          (response) => {
            console.log(response);
            this.uploadedFiles = [];
          },
          (error) => {
            
            console.error(error);
          }
        );
        }
        this.openSuccessSnackBar(); 
            this.formex.reset(); 
      },
      error => {
        console.error('Error:', error);
        // Handle the error (e.g., show an error message to the user)
      }
      );
      
  }
  submitFormblog() {
    console.log(this.formex.value);
   
    this.eventService.submitBlogClaim(this.formblog.value)
      .subscribe(   (response: any) => {
        console.log(response.id)
        const data = response;
        console.log(data.id)
        this.openSuccessSnackBar(); 
            this.formblog.reset(); 
      },
      error => {
        console.error('Error:', error);
        // Handle the error (e.g., show an error message to the user)
      }
      );
      
  }

  submitFormpart() {
    console.log(this.formex.value);
   
    this.eventService.submitPartnershipClaim(this.formpart.value)
      .subscribe(   (response: any) => {
        console.log(response.id)
        const data = response;
        console.log(data.id)
        console.log(this.uploadedFiles);
        if (this.uploadedFiles.length>0){
        this.eventService.uploadFilesPart(data.id, this.uploadedFiles).subscribe(
          (response) => {
            console.log(response);
            this.uploadedFiles = [];
          },
          (error) => {
            
            console.error(error);
          }
        );
        }
        this.openSuccessSnackBar(); 
            this.formpart.reset(); 
      },
      error => {
        console.error('Error:', error);
        // Handle the error (e.g., show an error message to the user)
      }
      );
      
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
       this.files = Array.from(input.files);

      
    }
  }
    
  
  deleteFile(f: { name: any; }){
    this.files = this.files.filter(function(w){ return w.name != f.name });

  }
  onFileSelect(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    if (files) {
      this.uploadedFiles = Array.from(files);
    }
  }

  onDragOver(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer?.files;
    if (files) {
      this.uploadedFiles = Array.from(files);
    }
  }
  selectEvent(event: string) {
    this.selectedEvent = event;
    this.showEventOptions = false;
  }
  toggleForm(formId: string) {
    console.log('Toggle form called with ID:', formId);
    this.selectedFormId = formId;
  }
  public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Br',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'In',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}

