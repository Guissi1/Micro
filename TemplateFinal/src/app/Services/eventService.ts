import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8099';

  constructor(private http: HttpClient) {}

  submitEventClaim(eventData: any) {
    return this.http.post(`${this.baseUrl}/eventClaim/claim`, eventData)
      
  }
  submitExchangeProgramClaim(eventData: any) {
    return this.http.post(`${this.baseUrl}/exchangeProgram/add`, eventData)
      
  }
  submitBlogClaim(eventData: any) {
    return this.http.post(`${this.baseUrl}/BlogClaim/claim`, eventData)
      
  }
  submitPartnershipClaim(eventData: any) {
    return this.http.post(`${this.baseUrl}/PartnershipClaim/add`, eventData)
      
  }
  uploadFiles(id: number, files: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('id', id.toString());
    for (const file of files) {
      formData.append('file', file);
    }

    return this.http.post(`${this.baseUrl}/files/upload`, formData);
  }
  uploadFilesEX(id: number, files: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('id', id.toString());
    for (const file of files) {
      formData.append('file', file);
    }

    return this.http.post(`${this.baseUrl}/files/uploadEx`, formData);
  }
  uploadFilesPart(id: number, files: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('id', id.toString());
    for (const file of files) {
      formData.append('file', file);
    }

    return this.http.post(`${this.baseUrl}/files/uploadPart`, formData);
  }
  getAllEventClaimsWithFiles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/eventClaim/allClaims`);
  }
  getAllBlogClaimsWithFiles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/BlogClaim/allClaims`);
  }
  getAllExchangeProgramClaimsWithFiles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/exchangeProgram/allClaims`);
  }
  getAllPartnershipClaimsWithFiles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/PartnershipClaim/allClaims`);
  }
  getEventClaimDetails(claimId: number): Observable<any> {
    const url = `${this.baseUrl}/eventClaim/${claimId}`; 
    return this.http.get(url);
  }
  updateEventClaimStatus(claimId: number, status: string): Observable<any> {
    const url = `${this.baseUrl}/eventClaim/updateStatus/${claimId}`; 
    return this.http.put(url, status, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  getFilesByEventClaimId(eventClaimId: number): Observable<File[]> {
    return this.http.get<File[]>(`${this.baseUrl}/files/event-claim/${eventClaimId}`);
  }
  getBlogClaimDetails(claimId: number): Observable<any> {
    const url = `${this.baseUrl}/BlogClaim/${claimId}`; 
    return this.http.get(url);
  }
  updateBlogClaimStatus(claimId: number, status: string): Observable<any> {
    const url = `${this.baseUrl}/BlogClaim/updateStatus/${claimId}`; 
    return this.http.put(url, status, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  getExchangeProgramClaimDetails(claimId: number): Observable<any> {
    const url = `${this.baseUrl}/exchangeProgram/${claimId}`; 
    return this.http.get(url);
  }
  updateExchangeProgramClaimStatus(claimId: number, status: string): Observable<any> {
    const url = `${this.baseUrl}/exchangeProgram/updateStatus/${claimId}`; 
    return this.http.put(url, status, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  getFilesByExchangeProgramClaimId(eventClaimId: number): Observable<File[]> {
    return this.http.get<File[]>(`${this.baseUrl}/files/exchangeProgram-claim/${eventClaimId}`);
  }
  getPartnershipClaimDetails(claimId: number): Observable<any> {
    const url = `${this.baseUrl}/PartnershipClaim/${claimId}`; 
    return this.http.get(url);
  }
  updatePartnershipClaimStatus(claimId: number, status: string): Observable<any> {
    const url = `${this.baseUrl}/PartnershipClaim/updateStatus/${claimId}`; 
    return this.http.put(url, status, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  getFilesByPartnershipClaimId(eventClaimId: number): Observable<File[]> {
    return this.http.get<File[]>(`${this.baseUrl}/files/partnership-claim/${eventClaimId}`);
  }
}