import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private apiUrl = 'http://localhost:8080/api/deployments/anthos';
  
  constructor(private http: HttpClient){}

    GenerateConfig(configMap: any){
    return this.http.post(`${this.apiUrl}/configMap`, configMap, {
      responseType: 'text'
    })
  }
  
}
