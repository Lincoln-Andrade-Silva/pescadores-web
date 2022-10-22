import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { DashboardComponent } from './dashboard.component';
import { DashboardRotas } from './dashboard.routes';
import { NavComponent } from '../nav/nav.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent
  ],
  imports: [    
    CommonModule,
    RouterModule.forChild(DashboardRotas),

  ]
})
export class DashboardModule { }