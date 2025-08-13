import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecretService {

  private apiUrl = 'http://localhost:8080/api/deployments/anthos';

  constructor(private http: HttpClient) { }

  GenerateConfig(secret: any) {
    return this.http.post(`${this.apiUrl}/secret`, secret, {
      responseType: 'text'
    })
  }
}
