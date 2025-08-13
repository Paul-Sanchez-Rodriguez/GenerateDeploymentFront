import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-env-vars-secret',
  imports: [CommonModule, FormsModule],
  templateUrl: './env-vars-secret.html',
  styleUrl: './env-vars-secret.css'
})
export class EnvVarsSecret {

  @Output() variablesChange = new EventEmitter<any[]>();

    variablesSecrets = [
    { nameDeploy: '',nameSecret: '',  key: ''}
  ];

  addVariable() {
    this.variablesSecrets.push({ nameDeploy: '',nameSecret: '',  key: ''});
  }
  
  removeVariable(index: number) {
    this.variablesSecrets.splice(index, 1);
    this.variablesChange.emit(this.variablesSecrets);
  }
  emitir() {
  this.variablesChange.emit(this.variablesSecrets);
  }

}
