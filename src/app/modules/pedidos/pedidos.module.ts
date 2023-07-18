import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    PedidosComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class PedidosModule { }
