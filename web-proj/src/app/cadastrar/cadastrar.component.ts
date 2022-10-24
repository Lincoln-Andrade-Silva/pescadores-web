import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../models/Person';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  fisher: Person = new Person();
  constructor( private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  create(){
    console.log(this.fisher)
    this.service.incluir(this.fisher).subscribe(() => {
      this.router.navigate(['/home']);

    })
  }
}
