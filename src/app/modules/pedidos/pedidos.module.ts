import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';
import { HeaderModule } from '../header/header.module';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    PedidosComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    QRCodeModule
  ]
})
export class PedidosModule { }
