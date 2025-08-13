import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeploymentsGkeService {
    private apiUrl = 'http://localhost:8080/api/deployments/gke';
  
  constructor(private http: HttpClient){}

  GenerateDeployment(deployment: any){
    console.log(deployment)
    return this.http.post(`${this.apiUrl}/deployments/core`, deployment, {
      responseType: 'text'
    })
  }

  GenerateDeploymentGeneric(deployment: any){
    console.log(deployment)
    return this.http.post(`${this.apiUrl}/deployments/generico`, deployment, {
      responseType: 'text'
    })
  }
}
