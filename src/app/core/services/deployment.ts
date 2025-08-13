import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Deployment {

  private apiUrl = 'http://localhost:8080/api/deployments/anthos';
  
  constructor(private http: HttpClient){}

  GenerateDeployment(deployment: any){
    console.log(deployment)
    return this.http.post(`${this.apiUrl}/deployments`, deployment, {
      responseType: 'text'
    })
  }
}
