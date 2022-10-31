import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { DashboardComponent } from './dashboard.component';
import { DashboardRotas } from './dashboard.routes';
import { NavComponent } from '../nav/nav.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipe/filter.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    FilterPipe
  ],
  imports: [    
    CommonModule,
    RouterModule.forChild(DashboardRotas),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DashboardModule { }