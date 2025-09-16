import { Routes } from '@angular/router';
import { LayoutBody } from './layout/body/layout-body/layout-body';
import { EnvVars } from './shared/components/env-vars/env-vars';
import { Deployments } from './layout/body/deployments/deployments';
import { ConfigMap } from './layout/body/config-map/config-map';
import { Secret } from './layout/body/secret/secret';
import { DeploymentGkeCore } from './layout/body/deployment-gke-core/deployment-gke-core';
import { DeploymentGkeGeneric } from './layout/body/deployment-gke-generic/deployment-gke-generic';

export const routes: Routes = [
    { path: 'DeploymentAnthos', component: Deployments },
    { path: 'configMap', component: ConfigMap },
    { path: 'secret', component: Secret },
    { path: 'DeploymentGkeCore', component: DeploymentGkeCore},
    { path: 'DeploymentGkeGeneric', component: DeploymentGkeGeneric},
    { path: '', redirectTo: '/DeploymentAnthos', pathMatch: 'full' },
];
