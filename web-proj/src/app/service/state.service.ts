import { Injectable } from '@angular/core';
import { State } from '../models/State';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  states: State[] = [];

  constructor() { }

  listAll() {
    return this.states =
      [{
        id: 1,
        initials: "Varejo",
        name: "Venda Varejo"
      },
      {
        id: 2,
        initials: "Atacado",
        name: "Venda Atacado"
      },
      {
        id: 3,
        initials: "Turismo de Pesca",
        name: "Venda Turismo de Pesca"
      }]
  }
}
