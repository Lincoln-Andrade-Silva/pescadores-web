import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [
    ],
    imports: [    
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
    ]
  })
  export class NavComponent { }