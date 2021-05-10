import {Component, OnInit} from '@angular/core';
import {UserData} from '../../model/user.data';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {UserDataService} from '../../service/user.data.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-user.list',
  templateUrl: './user.list.component.html',
  styleUrls: ['./user.list.component.scss']
})
export class UserListComponent implements OnInit {

  settings: any = {
    columnMode: ColumnMode.force
  };

  items: any[] = [];

  columns: any[] = [
    {
      name: 'Cédula',
      prop: 'cedula',
      width: 80
    },
    {
      prop: 'nombre',
    },
    {
      prop: 'apellidos'
    },
    {
      prop: 'sexo',
      width: 50,
    },
    {
      name: 'Fecha de Nacimiento',
      prop: 'fecha_de_nacimiento',
      width: 80,
      pipe: this.datePipe,
    },
    {
      name: 'Lugar de Nacimiento',
      prop: 'lugar_de_nacimiento_1',
      width: 100,
    },
    {
      name: 'País de Nacimiento',
      prop: 'lugar_de_nacimiento_2',
      width: 100,
    },
    {
      name: 'Nacionalidad',
      prop: 'nacionalidad',
      width: 100,
    },
    {
      name: 'Padre',
      prop: 'padre_nombre_completo'
    },
    {
      name: 'Madre',
      prop: 'madre_nombre_completo'
    },
  ];

  constructor(private userDataService: UserDataService,
              private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    this.userDataService.data$.subscribe((list: UserData[]) => {
      this.items = list;
    });
  }

}
