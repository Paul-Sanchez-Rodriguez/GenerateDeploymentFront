import { Component } from '@angular/core';
import { EnvVars } from '../../../shared/components/env-vars/env-vars';
import { EnvVarsConfig } from '../../../shared/components/env-vars-config/env-vars-config';
import { EnvVarsSecret } from '../../../shared/components/env-vars-secret/env-vars-secret';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Deployment } from '../../../core/services/deployment';


@Component({
  selector: 'app-layout-body',
  imports: [CommonModule, FormsModule],
  templateUrl: './layout-body.html',
  styleUrl: './layout-body.css'
})
export class LayoutBody {

  
}
