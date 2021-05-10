import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy, DatePipe} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

import {IconModule, IconSetModule, IconSetService} from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import {AppComponent} from './app.component';

// Import containers
import {DefaultLayoutComponent} from './template/containers';

import {P404Component} from './template/views/error/404.component';
import {P500Component} from './template/views/error/500.component';
import {LoginComponent} from './template/views/login/login.component';
import {RegisterComponent} from './template/views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import {AppRoutingModule} from './app.routing';

// Import 3rd party components
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ChartsModule} from 'ng2-charts';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserDataForm} from './application/form/user.data.form';
import {UserDataService} from './application/service/user.data.service';
import {UserListComponent} from './application/component/user.list/user.list.component';
import {UserAddComponent} from './application/component/user.add/user.add.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgQrScannerModule} from 'angular2-qrscanner';
import {QrScannerModalComponent} from './application/component/qr.scanner.modal/qr-scanner-modal.component';
import {BsModalService} from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    // ---------------------------------------
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgQrScannerModule
    // ---------------------------------------
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    // ---------------------------------------
    UserListComponent,
    UserAddComponent,
    QrScannerModalComponent,
    // ---------------------------------------
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    // -------------------------------------------
    DatePipe,
    BsModalService,
    UserDataForm,
    UserDataService,
    // -------------------------------------------
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
