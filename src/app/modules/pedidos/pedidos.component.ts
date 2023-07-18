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
  showMessage: boolean = false;
  total: number = 0;
  showPagamento: boolean = false;
  showPix: boolean = true;

  constructor(public appState: AppStateService) {
    this.qtdPedidos = this.appState.pedidos.length;
    this.pratos = this.appState.pedidos;
    this.appState.pedidos.forEach(element => {
      this.total += element.preco;
    })
  }

  ngOnInit(): void {
    if(this.appState.pedidos.length == 0){
      this.showMessage = true;
    }
  }

  showPag(){
    this.showPagamento = true;
  }

  pix(){
    this.showPix = true;

    let pix = document.getElementById("pix");
    pix!.style.backgroundColor = "#0D161B";
    let credito = document.getElementById("credito");
    credito!.style.backgroundColor = "transparent";
  }

  credito(){
    this.showPix = false;

    let credito = document.getElementById("credito");
    credito!.style.backgroundColor = "#0D161B";
    let pix = document.getElementById("pix");
    pix!.style.backgroundColor = "transparent";

  }

}
