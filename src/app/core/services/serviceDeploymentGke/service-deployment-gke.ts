import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDeploymentGke {
  

  private apiUrl = 'http://localhost:8080/api/deployments/gke';

  constructor(private http: HttpClient) { }

  GenerateService(service: any) {
    return this.http.post(`${this.apiUrl}/service`, service, {
      responseType: 'text'
    })
  }

}
