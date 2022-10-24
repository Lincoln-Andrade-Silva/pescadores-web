import { Component, OnInit } from '@angular/core';
import { Person } from '../models/Person';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  fisher: Person = new Person();
  constructor() { }


  ngOnInit(): void {
  }
}
