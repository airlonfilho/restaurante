import { Component, OnInit } from '@angular/core';
import { Prato } from 'src/app/models/Prato';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  qtdPedidos: number = 0;
  pratos: Prato[] = [];

  constructor(public appState: AppStateService) {
    this.qtdPedidos = this.appState.pedidos.length;
    this.pratos = this.appState.pedidos;
  }

  ngOnInit(): void {
  }

}
