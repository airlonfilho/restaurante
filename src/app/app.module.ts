import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { SigninModule } from './modules/signin/signin.module';
import { HomeModule } from './modules/home/home.module';
import { AppStateService } from './services/app-state.service';
import { PratosService } from './services/pratos.service';
import { HttpClientModule } from '@angular/common/http';
import { PedidosModule } from './modules/pedidos/pedidos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SigninModule,
    HomeModule,
    PedidosModule,
    HttpClientModule
  ],
  providers: [AppStateService, PratosService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
