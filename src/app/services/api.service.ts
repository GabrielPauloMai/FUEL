import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Dados {

  id: any,

  Posto: any,

  Bandeira: any,

  Bairro: any,

  Gas_comum: any,

  Gas_aditivada: any,

  GNV: any,

  Die_s10: any,

  Die_500: any,

  Alcool: any,

  Gas: any,

  URLBandeira: any

}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
   APIkey = 'http://gabrielcode.live/';

  constructor(private http: HttpClient) { }

public RequestAPI(){
  
  return this.http.get(`${this.APIkey}/api/proconInfos`);
}


}