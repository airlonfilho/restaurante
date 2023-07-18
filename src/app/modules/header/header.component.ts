import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prato } from 'src/app/models/Prato';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pedidos: Prato[] = [];
  @Input() qtdPedidos: number = 0;
  typeAdmin: boolean = false;
  logo: string = '';

  constructor(public appState: AppStateService,
    private router:Router) {
  }

  ngOnInit(): void {

    this.setAdmin(false);
  }

  irParaPedidos(){
    this.router.navigate(['pedidos']);
  }

  home(){
    this.router.navigate(['home']);
  }

  setAdmin(type: boolean){
    this.typeAdmin = type;
    type ? this.logo = "./../../../assets/logoAdmin.svg" : this.logo = "./../../../assets/logo.svg"
  }

}
