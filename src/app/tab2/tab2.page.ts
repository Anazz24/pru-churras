import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  carta=0;
  time1=0;
  time2=0;
  partida1=0
  partida2=0

  constructor() {}

  alterarValorValendo(valor: number){
    this.carta = valor;
  }

  adicionarPontuacaoTime1(){
    this.time1 += this.carta;
    this.carta = 1;
    if(this.time1 >=12){
      this.partida1 += 1;
      this.time1=0;
      this.time2=0;
    }
  }
  adicionarPontuacaoTime2(){
    this.time2 += this.carta;
    this.carta = 1;
    if(this.time2 >=12){
      this.partida2 += 1;
      this.time1=0;
      this.time2=0;
    }
  }

  removerPontuacaoTime1(){
    this.time1 -= this.carta;
    this.carta = 1;
  }

  removerPontuacaoTime2(){
    this.time2 -= this.carta;
    this.carta = 1;
  }

  LimparVariaveisDoZero(){
    this.time1 = 0;
    this.time2 = 0;
    this.carta = 0;
    this.partida1=0;
    this.partida2=0;
  }

}
