import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnvVarsSecret } from '../../../shared/components/env-vars-secret/env-vars-secret';
import { EnvVarsConfig } from '../../../shared/components/env-vars-config/env-vars-config';
import { EnvVars } from '../../../shared/components/env-vars/env-vars';
import { DeploymentsGkeService } from '../../../core/services/deploymentsGke/deployments-gke-service';
import { ServiceDeploymentGke } from '../../../core/services/serviceDeploymentGke/service-deployment-gke';

@Component({
  selector: 'app-deployment-gke-core',
  imports: [EnvVars, EnvVarsConfig, EnvVarsSecret, FormsModule],
  templateUrl: './deployment-gke-core.html',
  styleUrl: './deployment-gke-core.css'
})
export class DeploymentGkeCore {
  artifact: String = '';
  replicas: number = 0;
  namespace: String = 'foh';
  variables: any;
  configMaps: any[] = [];
  secrets: any[] = [];
  cluster: String = '';
  instance: String = '';

  constructor(private deploymentGkeCoreService: DeploymentsGkeService, private serviceDeploymentGke: ServiceDeploymentGke){}

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

  save(){
    const deployment:any = {
      name: this.artifact,
      image: this.artifact,
      namespace: this.namespace,
      replicas: this.replicas,
      enviroments: this.variables,
      configMapRefs: this.configMaps,
      secretRefs: this.secrets,
      volumeSpecs: [],
      cluster: this.cluster,
      instance: this.instance,
    }

    const service:any = {
      name: this.artifact,
      namespace: this.namespace,
      type: "NodePort",
      port: 8080,
      targetPort: 8080
    }

    this.deploymentGkeCoreService.GenerateDeployment(deployment).subscribe({
      next: (res) => console.log('exito', res),
      error: (err) => console.error('error', err)
    })

    this.serviceDeploymentGke.GenerateService(service).subscribe({
      next: (res) => console.log('exito', res),
      error: (err) => console.error('error', err)
    })
  }
}
