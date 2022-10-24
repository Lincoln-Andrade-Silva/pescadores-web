import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRotas } from './login.routes';
import {RouterModule} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [    
    CommonModule,
    RouterModule.forChild(LoginRotas),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }