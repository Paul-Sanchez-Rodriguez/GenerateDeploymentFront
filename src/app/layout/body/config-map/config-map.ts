import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '../../../core/services/configMap/config-service';

@Component({
  selector: 'app-config-map',
  imports: [CommonModule, FormsModule],
  templateUrl: './config-map.html',
  styleUrl: './config-map.css'
})
export class ConfigMap {

  namespace: String = 'foh';
  artifact: String | undefined;
  editIndex: number | null = null;

  configMap:any = [];

  newVariable = {
    name: '',
    value: ''
  };

  constructor(private configService: ConfigService){}

  saveVariable() {
    if (this.editIndex !== null) {
      // editar
      this.configMap[this.editIndex] = { ...this.newVariable };
    } else {
      // crear
      this.configMap.push({ ...this.newVariable });
    }
    this.newVariable = { name: '', value: '' };
    this.editIndex = null;
  }

  removeVariable(index: number) {
    this.configMap.splice(index, 1);
  }


  openCreateModal() {
    this.newVariable = { name: '', value: '' };
    this.editIndex = null; // modo crear
  }

  openEditModal(index: number) {
    this.newVariable = { ...this.configMap[index] };
    this.editIndex = index; // modo editar
  }

  saveConfigMap() {

    const enviromentsObject = this.configMap.reduce((acc: any, item: any) => {
      acc[item.name] = item.value;
      return acc;
    }, {});


    const config: any = {
      name: this.artifact,
      namespace: this.namespace,
      data: enviromentsObject,
    }

    this.configService.GenerateConfig(config).subscribe({
      next: (res) => console.log('exito', res),
      error: (err) => console.error('error', err)
    })

  }
}
