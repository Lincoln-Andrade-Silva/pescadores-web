import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models/Response';
import { Observable } from 'rxjs';

export class genericCRUD<T> {
  
  constructor(protected http: HttpClient, private url: string) { }


  listar() : Observable<Response<T[]>> {
    return this.http.get(this.url);
  }


  buscarPorId(id : string) : Observable<T> {

    const path = `${this.url}/${id}`;

    return this.http.get<T>(path);

  }


  incluir(tipo : T) : Observable<any> {

    return this.http.post<T>(this.url, tipo);

  }


  atualizar(id: string, tipo : T) : Observable<any> {

    const path = `${this.url}/${id}`;

    return this.http.put<T>(path, tipo);

  }


  excluir(id? : string) : Observable<any> {

    const path = `${this.url}/${id}`;

    return this.http.delete<T>(path);

  }

}
