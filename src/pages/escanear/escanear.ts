import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados';


import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-escanear',
  templateUrl: 'escanear.html'
})
export class EscanearPage {

  mifoto:any;

  constructor(public navCtrl: NavController,private camera:Camera) {
  }
  goToResultados(params){
    if (!params) params = {};
    this.navCtrl.push(ResultadosPage);
  }

  tomarfoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.mifoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }


  obtenerfoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.mifoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }


}
