import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CadastrarComponent } from "./cadastrar.component";
import { CadastrarRotas } from "./cadastrar.routes";

@NgModule({
    declarations: [
      CadastrarComponent
    ],
    imports: [    
      CommonModule,
      RouterModule.forChild(CadastrarRotas),
  
    ]
  })
  export class CadastrarModule { }