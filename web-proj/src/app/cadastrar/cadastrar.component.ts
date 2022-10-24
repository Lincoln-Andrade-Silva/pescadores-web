import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../models/Person';
import { State } from '../models/State';
import { ServiceService } from '../service/service.service';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  fisher: Person = new Person();
  states: State[] = [];
  constructor(private router: Router, private service: ServiceService, private stateService: StateService) { }

  ngOnInit(): void {
    this.states = this.stateService.listAll();
    console.log(this.states)
  }

  create() {
    console.log(this.fisher)
    this.service.incluir(this.fisher).subscribe(() => {
      this.router.navigate(['/home']);

    })
  }
}
