import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EscanearPage } from '../escanear/escanear';
import { ResultadosPage } from '../resultados/resultados';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

  constructor(public navCtrl: NavController) {
  }
  goToEscanear(params){
    if (!params) params = {};
    this.navCtrl.push(EscanearPage);
  }goToResultados(params){
    if (!params) params = {};
    this.navCtrl.push(ResultadosPage);
  }
}
