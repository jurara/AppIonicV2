import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { EscanearPage } from '../pages/escanear/escanear';
import { ResultadosPage } from '../pages/resultados/resultados';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';


import { PrincipalPage } from '../pages/principal/principal';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = PrincipalPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PrincipalPage);
  }goToEscanear(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EscanearPage);
  }goToResultados(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ResultadosPage);
  }goToAcercaDe(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AcercaDePage);
  }
}
