import { Component, Directive, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
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

@Component({
  templateUrl: 'ClaimsList.component.html',
  styleUrls: ['ClaimsList.component.scss']
})

export class ClaimsListComponent implements OnInit {
  constructor(private eventClaimService: EventService) {}

  statusFilter: string = ''; 
  eventClaimTypes: string[] = ['Organization', 'Staff', 'Participation','Other']; 
  blogClaimTypes: string[] = ['Racism','Language violation','Irrelevancy','Other'];
  exchangeProgramClaimTypes: string[] = ['Travel expenses','Accommodation costs','Visa and passport fees (if applicable)','Health insurance costs(if applicable)','Transportation within the host country','Program fees or tuition','Other'];
  partnershipClaimTypes: string[] = ['Racism','Language violation','Irrelevancy','Other'];
  claimTypeFilters: { events: string, blog: string ,exchangeProgram:string} = { events: '', blog: '',exchangeProgram:'' };
  eventClaims: any[] = [];
  blogClaims: any[] = [];
  exchangeProgramClaims: any[] = [];
  partnershipClaims: any[] = [];
  p: number = 1; 
  itemsPerPage: number = 10; 
  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];

  filterClaims(claims: any[], claimType: string, status: string): any[] {
    return claims.filter((claim) => {
      // Apply the filter based on claim type and status
      if (
        (!claimType || claim.claimType === claimType) &&
        (!status || claim.status === status)
      ) {
        return true;
      }
      return false;
    });
  }

  pageChanged(event: any): void {
    this.p = event;
  }

  sortClaimsByClaimType(claims: any[]): any[] {
    return claims.slice().sort((a, b) => a.claimType.localeCompare(b.claimType));
  }

  sortClaimsByStatus(claims: any[]): any[] {
    return claims.slice().sort((a, b) => a.status.localeCompare(b.status));
  }

  ngOnInit(): void {
    this.eventClaimService.getAllEventClaimsWithFiles().subscribe((data) => {
      this.eventClaims = data;
      console.log(data);
    },
    (error) => {
            
      console.error(error);
    }
    );

    this.eventClaimService.getAllBlogClaimsWithFiles().subscribe((data) => {
      this.blogClaims = data;
      console.log(data);
    },
    (error) => {
            
      console.error(error);
    }

    );
    this.eventClaimService.getAllPartnershipClaimsWithFiles().subscribe((data) => {
      this.partnershipClaims = data;
      console.log(data);
    },
    (error) => {
            
      console.error(error);
    }
    );

    this.eventClaimService.getAllExchangeProgramClaimsWithFiles().subscribe((data) => {
      this.exchangeProgramClaims = data;
      console.log(data);
    },
    (error) => {
            
      console.error(error);
    }
    );
  }
  getTextColor(status: string): string {
    
    if (status === 'Unopened') {
      return 'primary'; 
    } else if (status === 'Opened') {
      return 'secondary'; 
    } else if (status === 'Resolved'){
      return 'success'; 
    } else{
      return 'danger'; 
  }
  }
}

