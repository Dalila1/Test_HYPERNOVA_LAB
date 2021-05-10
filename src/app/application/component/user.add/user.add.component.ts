import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {QrScannerModalComponent} from '../qr.scanner.modal/qr-scanner-modal.component';
import {UserData} from '../../model/user.data';
import {UserDataService} from '../../service/user.data.service';
import {FormGroup} from '@angular/forms';
import {UserDataForm} from '../../form/user.data.form';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user.add',
  templateUrl: './user.add.component.html',
  styleUrls: ['./user.add.component.scss']
})
export class UserAddComponent implements OnInit {

  modalRef: BsModalRef;

  form: FormGroup;

  constructor(private modalService: BsModalService,
              private userDataForm: UserDataForm,
              private userDataService: UserDataService,
              private router: Router) {
    this.form = this.userDataForm.getForm();
  }

  ngOnInit(): void {
  }

  onReadQr(result): void {
    console.log(result);
  }

  protected openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'gray modal-lg'})
    );
  }

  openModalWithComponent() {
    const initialState = {};
    this.modalRef = this.modalService.show(QrScannerModalComponent, {initialState});
    this.modalRef.content.getResult().subscribe((result) => {

      if (result && result.trim() !== '') {

        const resultLines = (result ? result as string : '').split('|');

        const qrData: UserData = {
          cedula: resultLines[0].trim(),
          nombre: resultLines[1].trim(),
          apellidos: resultLines[2].trim(),
          sexo: resultLines[4],
          lugar_de_nacimiento_1: resultLines[5] ? ((resultLines[5] + ',').split(',')[0]) : '',
          lugar_de_nacimiento_2: resultLines[5] ? ((resultLines[5] + ',').split(',')[1]) : '',
          fecha_de_nacimiento: resultLines[6].split('-').reverse().join('-'),
          nacionalidad: resultLines[7],
          padre_cedula: resultLines[8] ? ((resultLines[8] + '/').split('/')[0]).trim() : '',
          padre_nombre_completo: resultLines[8] ? ((resultLines[8] + '/').split('/')[1]).trim() : '',
          madre_cedula: resultLines[10] ? ((resultLines[10] + '/').split('/')[0]).trim() : '',
          madre_nombre_completo: resultLines[10] ? ((resultLines[10] + '/').split('/')[1]).trim() : '',
          expedida: resultLines[14].split('-').reverse().join('-'),
          expira: resultLines[15].split('-').reverse().join('-'),
          barcode: resultLines[16],
        };

        this.form.patchValue(qrData);
      }

    });
  }

  getCurrentDate(): any {
    return new Date();
  }

  onCancel(): void {
    this.router.navigate(['/user/list']).then();
  }

  onSave(): void {
    const data = this.form.getRawValue();
    this.userDataService.add(data);
    this.router.navigate(['/user/list']).then();
  }

  stopScanner(): void {
    this.modalRef.hide();
  }
}
