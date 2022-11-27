import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/Person';
import { State } from '../models/State';
import { ServiceService } from '../service/service.service';
import { StateService } from '../service/state.service';
import { Response } from '../models/Response';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  fisher: Person = new Person();
  states: State[] = [];
  editMode: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private service: ServiceService, private stateService: StateService) { }

  ngOnInit(): void {
    this.states = this.stateService.listAll();
    this.checkEditMode();
  }

  create() {
    this.service.incluir(this.fisher).subscribe(() => {
      this.router.navigate(['/home']);

    })
  }

  checkEditMode() {
    const str = this.route.snapshot.paramMap.get('id');
    if (str != null) {
      this.service.buscarPorId(str).subscribe((fisher : Response<any>) => {
        this.fisher = fisher.data;
      });
      this.editMode = true;
    }
  }

  excluir(person: Person) {
    this.service.excluir(person.id as any).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  update(person: Person) {
    this.service.atualizar((person.id as any),this.fisher).subscribe(() => {
      this.router.navigate(['/home']);
    });

  }
}
