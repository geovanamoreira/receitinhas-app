import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReceitasService } from '../receitas.service';
import { Receita } from './receita.model';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  @Input() receita: Receita;


  constructor() {
   }

  ngOnInit(): void {
  }

}
