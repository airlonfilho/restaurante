import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { SigninComponent } from './modules/signin/signin.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { PedidosComponent } from './modules/pedidos/pedidos.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pedidos', component: PedidosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
