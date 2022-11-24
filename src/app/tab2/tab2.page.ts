
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Tab1Page} from '../tab1/tab1.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dados: any[] = [];
  tipo: any;
  posto = null;
  litros = null;
  result = null;
  constructor(private t1: Tab1Page) { }

  ngOnInit() {
    
    this.t1.getRequest();
    this.dados = this.t1.lista;
    console.log(this.dados);
  }

  calc(posto: any,litros: any){
    let result: any;
    result = (posto * litros);
    result = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    this.result = result;
  }
}
