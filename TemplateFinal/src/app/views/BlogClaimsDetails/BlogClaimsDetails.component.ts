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
  
  templateUrl: 'BlogClaimsDetails.component.html',
  styleUrls: ['BlogClaimsDetails.component.scss']
})

export class BlogClaimsDetailsComponent implements OnInit {
  constructor(private eventClaimService: EventService, private route: ActivatedRoute,private http: HttpClient) {
  }
  files: any[] = [];
  statusFilter: string = '';
  eventClaimDetails: any;
  ngOnInit(): void {
    
    const claimId = this.route.snapshot.params['claimId'];

    
    this.eventClaimService.getBlogClaimDetails(claimId).subscribe((data) => {
      this.eventClaimDetails = data;
      console.log(data);
    }, (error) => {
      console.error(error);
    });
    
  }
  
  saveStatus() {
    this.eventClaimService.updateBlogClaimStatus(this.eventClaimDetails.id, this.statusFilter).subscribe(
      (response) => {
        console.log('Status updated successfully');
      },
      (error) => {
        console.error('Status update failed:', error);
      }
    );
  }
}

