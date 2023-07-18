import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PratosService {

  baseUrl:string = 'https://my-json-server.typicode.com/airlonfilho/restaurante';
  constructor(private httpClient: HttpClient) { }

  getPratos(): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + '/prato', {});
  }
}
