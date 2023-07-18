import { Injectable } from "@angular/core";
import { Prato } from "../models/Prato";

@Injectable({providedIn: 'root'})
export class AppStateService {

  prato: Prato = new Prato();
  pedidos: Prato[] = [];
}
