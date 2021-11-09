import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from '../receitas/receita/receita.model';
import { ReceitasService } from '../receitas/receitas.service';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.component.html',
  styleUrls: ['./receita-detalhe.component.css']
})
export class ReceitaDetalheComponent implements OnInit {

  receitas: Receita;

  constructor(private receitasService: ReceitasService,
    private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.receitasService.receitaById(this.rout.snapshot.params['id']).subscribe(receitas => {
      this.receitas = receitas;
    })
  }

}
