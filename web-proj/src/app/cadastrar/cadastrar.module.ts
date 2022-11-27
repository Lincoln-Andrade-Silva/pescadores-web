import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CadastrarComponent } from "./cadastrar.component";
import { CadastrarRotas } from "./cadastrar.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from "@angular/material/input";

@NgModule({
    declarations: [
      CadastrarComponent
    ],
    imports: [    
      CommonModule,
      RouterModule.forChild(CadastrarRotas),
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule
    ]
  })
  export class CadastrarModule { }