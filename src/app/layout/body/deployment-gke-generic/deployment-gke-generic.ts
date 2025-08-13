import { Component } from '@angular/core';
import { EnvVars } from '../../../shared/components/env-vars/env-vars';
import { EnvVarsConfig } from '../../../shared/components/env-vars-config/env-vars-config';
import { EnvVarsSecret } from '../../../shared/components/env-vars-secret/env-vars-secret';
import { FormsModule } from '@angular/forms';
import { DeploymentsGkeService } from '../../../core/services/deploymentsGke/deployments-gke-service';
import { ServiceDeploymentGke } from '../../../core/services/serviceDeploymentGke/service-deployment-gke';

@Component({
  selector: 'app-deployment-gke-generic',
  imports: [EnvVars, EnvVarsConfig, EnvVarsSecret, FormsModule],
  templateUrl: './deployment-gke-generic.html',
  styleUrl: './deployment-gke-generic.css'
})
export class DeploymentGkeGeneric {

  artifact: String = '';
  replicas: number = 0;
  namespace: String = 'foh';
  variables: any;
  configMaps: any[] = [];
  secrets: any[] = [];

  constructor(private deploymentsGkeService: DeploymentsGkeService, private serviceDeploymentGke: ServiceDeploymentGke) { }

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
    const deployment: any = {
      name: this.artifact,
      image: this.artifact,
      namespace: this.namespace,
      replicas: this.replicas,
      enviroments: this.variables,
      configMapRefs: this.configMaps,
      secretRefs: this.secrets,
      volumeSpecs: []
    }

    const service:any = {
      name: this.artifact,
      namespace: this.namespace,
      type: "NodePort",
      port: 8080,
      targetPort: 8080
    }
    
    this.deploymentsGkeService.GenerateDeploymentGeneric(deployment).subscribe({
      next: (res) => console.log('exito', res),
      error: (err) => console.error('error', err)
    })

    this.serviceDeploymentGke.GenerateService(service).subscribe({
      next: (res) => console.log('exito', res),
      error: (err) => console.error('error', err)
    })
  }
}
