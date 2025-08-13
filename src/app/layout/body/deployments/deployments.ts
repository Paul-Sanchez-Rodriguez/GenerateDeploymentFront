import { Component } from '@angular/core';
import { Deployment } from '../../../core/services/deployment';
import { EnvVars } from "../../../shared/components/env-vars/env-vars";
import { EnvVarsConfig } from "../../../shared/components/env-vars-config/env-vars-config";
import { EnvVarsSecret } from "../../../shared/components/env-vars-secret/env-vars-secret";
import { FormsModule } from '@angular/forms';
import { ServiceDeployment } from '../../../core/services/serviceDeployment/service-deployment';

@Component({
  selector: 'app-deployments',
  imports: [EnvVars, EnvVarsConfig, EnvVarsSecret,FormsModule],
  templateUrl: './deployments.html',
  styleUrl: './deployments.css'
})
export class Deployments {
  artifact:String = '';
  replicas: number = 0;
  namespace:String = 'foh';

  variables: any ;
  configMaps: any[] = [];
  secrets: any[] = [];
  constructor( private deploymentService: Deployment, private serviceDeployment: ServiceDeployment){}


  recibirVariables(datos: any) {
    this.variables = datos;
  }

  recibirConfigMap(datos: any[]) {
    this.configMaps = [...datos];
    console.log(this.configMaps)
  }

  recibirSecrets(datos: any[]) {
    this.secrets = [...datos];
  }

  save() {
    const deployment:any = {
      name: this.artifact,
      image: this.artifact,
      namespace: this.namespace,
      replicas: this.replicas,
      enviroments: this.variables,
      configMapRefs: this.configMaps,
      secretRefs: this.secrets
    }

    const service:any = {
      name: this.artifact,
      namespace: this.namespace,
      type: "NodePort",
      port: 8080,
      targetPort: 8080
    }

    this.deploymentService.GenerateDeployment(deployment).subscribe({
      next: (res) => console.log('exito', res),
      error: (err) => console.error('error', err)
    })

    this.serviceDeployment.GenerateService(service).subscribe({
      next: (res) => console.log('exito', res),
      error: (err) => console.error('error', err)
    })
  }

}
