import { Component, Directive, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
import { DashboardChartsData, IChartProps } from '../dashboard/dashboard-charts-data';
import {EventService} from '../../Services/eventService'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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

@Component({
  
  templateUrl: 'PartnershipClaimsDetails.component.html',
  styleUrls: ['PartnershipClaimsDetails.component.scss']
})

export class PartnershipClaimsDetailsComponent implements OnInit {
  constructor(private eventClaimService: EventService, private route: ActivatedRoute,private http: HttpClient) {
  }
  files: any[] = [];
  statusFilter: string = '';
  eventClaimDetails: any;
  ngOnInit(): void {
    
    const claimId = this.route.snapshot.params['claimId'];

    
    this.eventClaimService.getPartnershipClaimDetails(claimId).subscribe((data) => {
      this.eventClaimDetails = data;
      console.log(data);
    }, (error) => {
      console.error(error);
    });
    this.loadFiles(claimId);
    this.downloadFile(claimId);
  }
  loadFiles(claimId : number) {
    this.eventClaimService.getFilesByPartnershipClaimId(claimId).subscribe((data : File[]) => {
      this.files = data;
      console.log(this.files)
    }
    ,
    (error) => {
      console.error('Error loading files:', error);
    }
    );
  }
  downloadFile(fileId: number) {
    // Send a GET request to the endpoint to download the file
    this.http
      .get(`http://localhost:8099/files/download/${fileId}`, { responseType: 'arraybuffer' })
      .subscribe((data) => {
        console.log(data);
        const blob = new Blob([data], { type: 'application/octet-stream' });
        const url = window.URL.createObjectURL(blob);
        console.log(url)
      });
  }
  fileDownloadUrl(file: any): string {
    return `http://localhost:8099/files/download/${file.id}`; 
  }
  saveStatus() {
    this.eventClaimService.updateEventClaimStatus(this.eventClaimDetails.id, this.statusFilter).subscribe(
      (response) => {
        console.log('Status updated successfully');
      },
      (error) => {
        console.error('Status update failed:', error);
      }
    );
  }
}

