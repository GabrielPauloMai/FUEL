import { Component } from '@angular/core';

import { Injectable } from '@angular/core';

import { ApiService} from '../services/api.service';

export interface Dados {

  id: number,

  Posto: any,

  Bandeira: any,

  Bairro: any,

  GasolinaComum: any,

  GasolinaAditivada: any,

  GNV: any,

  DieselS10: any,

  DieselS500: any,

  ÁlcoolComum: any,

  Alcool: any,

  URLBandeira: any,

  Gasnum: number;

  Alcnum: number;

  S10: number;

  S500: number;

  GNVnum: number;

  Aditnum: number;
}


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


@Injectable({
  providedIn: 'root'
})

export class Tab1Page {

  response: any;
  lista: any[] = [];
  listgas: any[] = [];
  listadt: any[] = [];
  listalc: any[] = [];
  lists10: any[] = [];
  lists500: any[] = [];
  listgnv: any[] = [];
  dados!: Dados;
  segment = 'all';
  tipo = "listgas";
  constructor(private api: ApiService) { }

  ngOnInit() {
    
    this.getRequest();

  };
  


  getRequest(){

    console.log(this.tipo);

    this.api.RequestAPI().subscribe((data: any)=> {
      for (let i = 0; i < 34; i++) {
        this.dados = data[i];
        this.setDados(this.dados);
        this.lista.push(this.dados);
        };
        this.getSort(this.lista);
        return (this.lista);
      },(error)=>{
        console.log(error);
      } )
  }

  setDados(dados: any){
        
   
    this.setGasolina(this.dados['GasolinaComum'], this.dados['GasolinaAditivada'], this.dados['ÁlcoolComum']);
    this.setDiesel(this.dados['GasolinaComum'], this.dados['GasolinaAditivada'], this.dados['GasolinaAditivada']);    
    this.dados.URLBandeira = (`http://localhost:8100/assets/` + this.dados["Bandeira"] + `.png`);
    //this.getSort(this.dados);
    return this.dados;
  }


  setGasolina(comum: any, aditivada: any, alcool: any){
    this.dados.Gasnum = parseFloat(this.dados.GasolinaComum = this.regex(this.dados.GasolinaComum));
    this.dados.Aditnum = parseFloat(this.dados.GasolinaAditivada = this.regex(this.dados.GasolinaAditivada));
    this.dados.Alcnum = parseFloat(this.dados.Alcool = this.regex(this.dados.ÁlcoolComum));

  }
  setDiesel(S10: any, S500: any, GNV: any){
    this.dados.S10 = parseFloat(this.dados.DieselS10 = this.regex(this.dados.DieselS10));
    this.dados.S500 = parseFloat(this.dados.DieselS500 = this.regex(this.dados.DieselS500));
    this.dados.GNVnum = parseFloat(this.dados.GNV = this.regex(this.dados.GNV));

  }

  regex(obj: any){
    return obj = ((obj.substr(0,7)).replace("R$", "")).replace(",", ".");
  }


  getSort(lista: any){
    
      for (let i = 0; i < lista.length; i++) {
         let obj = lista[i];  
         if (obj.Gasnum != 0) {
         this.listgas.push(obj);
         };
         if (obj.Aditnum != 0) {
          this.listadt.push(obj);
         };
         if (obj.Alcnum != 0) {
          this.listalc.push(obj);
         };
         if (obj.S10 != 0) {
          this.lists10.push(obj);
         };
         if (obj.S500 != 0) {
          this.lists500.push(obj);
         };
         if (obj.GNVnum != 0) {
          this.listgnv.push(obj);
         };
      }
      this.Listgas();
      this.Listadt();
      this.AlcNum();
      this.ListS10();
      this.ListS500();
      this.ListGNV();
}

  Listgas(){
  this.listgas.sort(function(a: any, b: any) {
    if(a.Gasnum > b.Gasnum){
      return 1;
    }
    if(a.Gasnum < b.Gasnum){
      return-1;
    }
    else{
      return 0;
    }
    })
    let x = (this.listgas.length - 5) ;
      for (let i = 0; i < x; i++) {
    this.listgas.pop();
    
  }
  console.log(this.listgas);
  }


  Listadt(){
    this.listadt.sort(function(a: any, b: any) {
      if(a.Aditnum > b.Aditnum){
        return 1;
      }
      if(a.Aditnum < b.Aditnum){
        return-1;
      }
      else{
        return 0;
      }
      })
      let x = (this.listadt.length - 5) ;
        for (let i = 0; i < x; i++) {
      this.listadt.pop();
      
    }
    console.log(this.listadt);
    }


    AlcNum(){
      this.listalc.sort(function(a: any, b: any) {
        if(a.Alcnum > b.Alcnum){
          return 1;
        }
        if(a.Alcnum < b.Alcnum){
          return-1;
        }
        else{
          return 0;
        }
        })
        let x = (this.listalc.length - 5) ;
          for (let i = 0; i < x; i++) {
        this.listalc.pop();
        
      }
      console.log(this.listalc);
      }


      ListS10(){
        this.lists10.sort(function(a: any, b: any) {
          if(a.S10 > b.S10){
            return 1;
          }
          if(a.S10 < b.S10){
            return-1;
          }
          else{
            return 0;
          }
          })
          let x = (this.lists10.length - 5) ;
            for (let i = 0; i < x; i++) {
          this.lists10.pop();
          
        }
        console.log(this.lists10);
        }



        ListS500(){
          this.lists500.sort(function(a: any, b: any) {
            if(a.S500 > b.S500){
              return 1;
            }
            if(a.S500 < b.S500){
              return-1;
            }
            else{
              return 0;
            }
            })
            let x = (this.lists500.length - 5) ;
              for (let i = 0; i < x; i++) {
            this.lists500.pop();
            
          }
          console.log(this.lists500);
          }

          ListGNV(){
            this.listgnv.sort(function(a: any, b: any) {
              if(a.GNVnum > b.GNVnum){
                return 1;
              }
              if(a.GNVnum < b.GNVnum){
                return-1;
              }
              else{
                return 0;
              }
              })
              let x = (this.listgnv.length - 5) ;
                for (let i = 0; i < x; i++) {
              this.listgnv.pop();
              
            }
            console.log(this.listgnv);
            }












}