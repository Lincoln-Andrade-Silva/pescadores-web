import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';
import { Response } from '../models/Response';
import { genericCRUD } from './generic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService extends genericCRUD<Person>{

  constructor(protected override http: HttpClient) {
    super(http, "https://up-pescadores-api.herokuapp.com/person");
  }

  group_by(lista: any[], coluna: string) {
    var colunas: any = {};
    var resultado: any = [];

    if (lista.length > 0) {
      lista.forEach(function (element) {
          
          var reg: any = {};
          
          colunas[element[coluna]] = colunas[element[coluna]] || [];
          
          for (var i in element)
          if (i != coluna)
          reg[i] = element[i];
          
          colunas[element[coluna]].push(reg);
      });

      for (var i in colunas)
        resultado.push({ key: i, values: colunas[i] });
    }
    return resultado;
  }
}
