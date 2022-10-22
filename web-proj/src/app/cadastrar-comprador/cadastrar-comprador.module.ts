import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { CadastrarCompradorComponent } from './cadastrar-comprador.component';
import { CadastrarCompradorRotas } from './cadastrar-comprador-routes';



@NgModule({
  declarations: [
    CadastrarCompradorComponent,
  ],
  imports: [    
    CommonModule,
    RouterModule.forChild(CadastrarCompradorRotas),

  ]
})
export class CadastrarCompradorModule { }