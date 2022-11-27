import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../models/Response';
import { Observable } from 'rxjs';

export class genericCRUD<T> {
  
  constructor(protected http: HttpClient, private url: string) { }


  listar() : Observable<Response<T[]>> {
    return this.http.get(this.url);
  }


  buscarPorId(id : string) : Observable<Response<T>> {

    const path = `${this.url}/${id}`;

    return this.http.get<T>(path);

  }


  incluir(tipo : T) : Observable<T> {

    return this.http.post<T>(this.url+"/create", tipo);

  }


  atualizar(id: string, tipo : T) : Observable<T> {

    const path = `${this.url}/${id}`;

    return this.http.put<T>(path, tipo);

  }


  excluir(id? : string) : Observable<T> {

    const path = `${this.url}/${id}`;

    return this.http.delete<T>(path);

  }

}
