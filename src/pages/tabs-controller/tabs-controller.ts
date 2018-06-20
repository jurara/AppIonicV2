import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { EscanearPage } from '../escanear/escanear';
import { ResultadosPage } from '../resultados/resultados';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = PrincipalPage;
  tab2Root: any = EscanearPage;
  tab3Root: any = ResultadosPage;
  constructor(public navCtrl: NavController) {
  }
  
}
