import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { RECEITINHAS_API } from '../app.api';
import { Receita } from './receita/receita.model';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  constructor(private http: HttpClient,
    private toastr: ToastrService) {
  }

  receitas(): Observable<Receita[]> {
    return this.http.get<Receita[]>(`${RECEITINHAS_API}/receitas`).pipe(
      map(receitas => receitas),
      catchError(erro => this.exibeErro(erro))
    );
  }

  receitaById(id: String): Observable<Receita>{
    return this.http.get<Receita>(`${RECEITINHAS_API}/receitas/${id}`).pipe(
      map(receitas => receitas),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(e: any): Observable<any> {
    this.exibirMensagem('ERRO !!!', 'Não foi possível realizar a operação!', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo)
  }
}
