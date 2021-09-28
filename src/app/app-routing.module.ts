import { ReceitasComponent } from './receitas/receitas.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'receitas', component: ReceitasComponent},
  {path: 'receitas/:id', component: ReceitaDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
