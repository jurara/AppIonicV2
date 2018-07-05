import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados';

import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';
import { ImagePicker } from "@ionic-native/image-picker";
@Component({
  selector: 'page-escanear',
  templateUrl: 'escanear.html'
})
export class EscanearPage {

  mifoto:any;
  result:any=[];
  data:Observable<any>;
  constructor(public navCtrl: NavController,private camera:Camera, public http:HttpClient,public mytoast:ToastController
    ,public imagePicker:ImagePicker) {//
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
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum:true,
      targetHeight:400,
      targetWidth:200,
      allowEdit:true,
      
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.toast("se tomo foto","1");
     this.mifoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      this.toast("error verifica la camara","1");
     // Handle error
    });
  }


  obtenerfoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false,
      targetHeight:400,
      targetWidth:200
    }
    
    this.imagePicker.getPictures(options).then((imageData) => {
     for(var i=0;i<imageData.length;i++){
       this.toast("image uri ",ImageData[i]);
     }
     //this.mifoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     this.toast("eroor:","no se pudo obtener img");
    });
  }

  postfoto(){
    var url='https://a7662085.ngrok.io/analizarMuestra'
    let postData=new FormData();
    postData.append('hojas',this.mifoto);
    this.data=this.http.post(url,postData);
    this.data.subscribe(data=>{
      console.log(data)
      this.toast(data, "se mando");
    });
  }
 toast(msg,t){
let toas=this.mytoast.create({


duration:3000,
message:msg+"\n"+t,

position:"Button"

})
toas.present();
}

}
