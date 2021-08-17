import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receita } from './receita/receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  constructor(private http: HttpClient) { 
  }

  receitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(`http://localhost:3000/receitas`);
  }

}
