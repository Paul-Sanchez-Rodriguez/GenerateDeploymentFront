import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-env-vars',
  imports: [FormsModule, CommonModule],
  templateUrl: './env-vars.html',
  styleUrl: './env-vars.css'
})
export class EnvVars {
  @Output() variablesChange = new EventEmitter<any[]>();

  ambienteSelect:any = "";

  variables = [
    { key: 'ENV', value: 'dev' },
    { key: 'PORT', value: '8080' },
    { key: 'BASE_LOGS', value: '/logs' },
    { key: 'LOG_LEVEL_SERVICE', value: 'INFO' },
    { key: 'LOG_OUTPUT_SERVICE', value: 'AMQP' },
  ];

  ngOnInit(){
    this.emitir();
  }

  actualizarEnv(){
    this.variables[0].value = this.ambienteSelect;
    this.emitir();
  }

  addVariable() {
    console.log(this.variables)
    this.variables.push({ key: '', value: '' });
  }

  removeVariable(index: number) {
    this.variables.splice(index, 1);
    const enviromentsObject = this.variables.reduce((acc: any, item: any) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
    this.variablesChange.emit(enviromentsObject);
  }

  emitir() {

    const enviromentsObject = this.variables.reduce((acc: any, item: any) => {
      acc[item.key] = item.value;
      return acc;
    }, {});
    this.variablesChange.emit(enviromentsObject);
  }
}
