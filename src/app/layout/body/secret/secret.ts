import { Component } from '@angular/core';
import { SecretService } from '../../../core/services/secrets/secret-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secret',
  imports: [FormsModule, CommonModule],
  templateUrl: './secret.html',
  styleUrl: './secret.css'
})
export class Secret {
  namespace: String = 'foh';
  artifact: String | undefined;
  editIndex: number | null = null;

  secrets: any = [];

  newVariable = {
    name: '',
    value: ''
  };

  constructor(private secretService: SecretService) { }

  saveVariable() {
    if (this.editIndex !== null) {
      // editar
      this.secrets[this.editIndex] = { ...this.newVariable };
    } else {
      // crear
      this.secrets.push({ ...this.newVariable });
    }
    this.newVariable = { name: '', value: '' };
    this.editIndex = null;
  }

  removeVariable(index: number) {
    this.secrets.splice(index, 1);
  }


  openCreateModal() {
    this.newVariable = { name: '', value: '' };
    this.editIndex = null; // modo crear
  }

  openEditModal(index: number) {
    this.newVariable = { ...this.secrets[index] };
    this.editIndex = index; // modo editar
  }

  saveConfigMap() {

    const enviromentsObject = this.secrets.reduce((acc: any, item: any) => {
      acc[item.name] = item.value;
      return acc;
    }, {});


    const secret: any = {
      name: this.artifact,
      namespace: this.namespace,
      data: enviromentsObject,
    }

    this.secretService.GenerateConfig(secret).subscribe({
      next: (res) => console.log('exito', res),
      error: (err) => console.error('error', err)
    })
  }


}
