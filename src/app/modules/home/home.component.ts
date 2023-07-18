import { Component, Input, OnInit } from '@angular/core';
import { Prato } from 'src/app/models/Prato';
import { AppStateService } from 'src/app/services/app-state.service';
import { PratosService } from 'src/app/services/pratos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prato: Prato = new Prato();
  qtdPedidos: number = 0;
  pratos: Prato[] = [];

  constructor(public appState: AppStateService,
    private service: PratosService) {
      this.qtdPedidos = this.appState.pedidos.length;
     }

  ngOnInit() {
    this.service.getPratos().subscribe(
      (response:any) => {
        this.pratos = response;
        this.pratos.forEach((element, index) => {
          element.qtd = 1;
          element.img = "./../../../assets/pratos/image" + element.id + ".svg";
        });
      }
    )
  }

  addPedido(prato: Prato){
    prato.preco = prato.preco * prato.qtd!;
    this.appState.pedidos.push(prato);
    this.qtdPedidos = this.appState.pedidos.length;
  }


  alterarQuantidade(type:string, id: number){
    let novoPreco: number = 0;
    switch(type){
      case 'add':
        this.pratos[id-1].qtd! += 1;
        novoPreco = this.pratos[id-1].preco;
        break;
      case 'remove':
        if(this.pratos[id-1].qtd! <= 1){
          return;
        }else {
          this.pratos[id-1].qtd! -= 1;
        }
        break;
      default:
        return;
    }

  }

}
