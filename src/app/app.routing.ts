import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './template/containers';

import { P404Component } from './template/views/error/404.component';
import { P500Component } from './template/views/error/500.component';
import { LoginComponent } from './template/views/login/login.component';
import { RegisterComponent } from './template/views/register/register.component';
import {UserListComponent} from './application/component/user.list/user.list.component';
import {UserAddComponent} from './application/component/user.add/user.add.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'user/list',
        component: UserListComponent,
        data: {
          title: 'Listado de Usuarios'
        }
      },
      {
        path: 'user/add',
        component: UserAddComponent,
        data: {
          title: 'Adicionar Usuario'
        }
      },
      {
        path: 'base',
        loadChildren: () => import('./template/views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./template/views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./template/views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./template/views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./template/views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./template/views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./template/views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./template/views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
