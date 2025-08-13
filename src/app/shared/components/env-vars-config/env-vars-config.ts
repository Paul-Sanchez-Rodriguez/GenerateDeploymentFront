import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-env-vars-config',
  imports: [CommonModule, FormsModule],
  templateUrl: './env-vars-config.html',
  styleUrl: './env-vars-config.css'
})
export class EnvVarsConfig {

  @Output() variablesChange = new EventEmitter<any[]>();

  variablesConfig = [
    { nameDeploy: '',nameConfigMap: '',  key: ''}
  ];

  addVariable() {
    this.variablesConfig.push({ nameDeploy: '',nameConfigMap: '',  key: ''});
  }

  removeVariable(index: number) {
    this.variablesConfig.splice(index, 1);
    this.variablesChange.emit(this.variablesConfig);
  }

  emitir() {
  this.variablesChange.emit(this.variablesConfig);
  }


}
