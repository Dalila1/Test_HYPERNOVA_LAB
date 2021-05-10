import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Injectable()
export class UserDataForm {
  constructor(protected fb: FormBuilder) {
  }

  public getForm(): FormGroup {
    return this.fb.group({
      cedula: ['', [Validators.required, Validators.pattern('')]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      sexo: ['', [Validators.required, Validators.maxLength(1)]],
      lugar_de_nacimiento_1: ['', [Validators.required, Validators.minLength(3)]],
      lugar_de_nacimiento_2: ['', [Validators.required, Validators.minLength(3)]],
      fecha_de_nacimiento: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required]],
      padre_cedula: ['', [Validators.required]],
      padre_nombre_completo: ['', [Validators.required]],
      madre_cedula: ['', [Validators.required]],
      madre_nombre_completo: ['', [Validators.required]],
      expedida: ['', [Validators.required]],
      expira: ['', [Validators.required]],
      barcode: ['', [Validators.required]],
    });
  }
}
