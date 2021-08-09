import { Injectable } from '@angular/core';
import { Receita } from './receita/receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  rects: Receita[] = [
    {
      id: "churros",
      nome: "Churros",
      descricao: "Os melhores churros de todos os tempos já feitos!",
      imagePath: "https://coolicias.ao/wp-content/uploads/2019/11/Receita-Deliciosa-de-Churros-Gourmet-1200x1200.jpg",
    },

    {
      id: "torta de limão",
      nome: "Tortinha de Limão",
      descricao: "Rápida e prática de se fazer, para alegrar seu dia!",
      imagePath: "https://5285.cdn.simplo7.net/static/5285/sku/e-liquids-Eliquid-tortalimao-1550515638612.jpg",
    },

    {
      id: "bolo cenoura",
      nome: "Bolo de Cenoura",
      descricao: "Delioso, muito fofinho e fácil de fazer!",
      imagePath: "https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400",
    },

    {
      id: "coxinha",
      nome: "Coxinha",
      descricao: "Uma receita que todos amam!",
      imagePath: "https://vivareceita-cdn.s3.amazonaws.com/uploads/2021/04/Passo-a-passo-delicioso-de-como-fazer-massa-de-coxinha.-Fonte-Pixabay-500x500.jpg",
    },

    {
      id: "pao queijo",
      nome: "Pão de Queijo",
      descricao: "Famoso e ótimo para seu café tarde!!!",
      imagePath: "https://s2.glbimg.com/9QNO2q8PEeOPLWikHCfMzZl75ZE=/620x466/e.glbimg.com/og/ed/f/original/2020/08/15/pao-de-queijo-mineiro.jpg",
    },

    {
      id: "waffle",
      nome: "Waffle Clássico",
      descricao: "Tanto doce quanto salgado, uma delícia!",
      imagePath: "https://i.pinimg.com/736x/34/9c/7d/349c7d1e87d4ce612e36006115418ef4.jpg",
    },
  ]

  constructor() { }

  receitas(): Receita[] {
    return this.rects;
  }
}
