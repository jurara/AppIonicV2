import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados';

import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from 'rxjs/Observable';
import { ImagePicker } from "@ionic-native/image-picker";
import    {  LottieAnimationViewModule }    from 'ng-lottie' ; 
@Component({
  selector: 'page-escanear',
  templateUrl: 'escanear.html'
})
export class EscanearPage {

  mifoto:any;
  result:any=[];
  data:Observable<any>;
  lottieConfig:any;
  lottieConfig2:any;
  lottieConfig3:any;
  lottieConfig4:any;
  constructor(public navCtrl: NavController,private camera:Camera, public http:HttpClient,public mytoast:ToastController
    ,public imagePicker:ImagePicker) {//
      LottieAnimationViewModule.forRoot();
      this.lottieConfig = {
        path: 'assets/foto_icon_.json',
        path2:'assets/file_error.json',
        autoplay: true,
        loop: true
      }
      this.lottieConfig2= {
        
        path:'assets/file_error.json',
        autoplay: true,
        loop: true
      }
      this.lottieConfig3= {
      
        path:'assets/cloud_upload.json',
        autoplay: true,
        loop: true
      }//imagen de enviarioni

      this.lottieConfig4= {
      
        path:'assets/layers.json',
        autoplay: true,
        loop: true
      }//json de obtener foto
    }//termina el constructor
  

  
  
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
     this.mifoto ='data:image/jpeg;base64,'+ imageData;//
    }, (err) => {
    
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
       this.toast("cargando imagen ",i+1);
     }
     this.mifoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    

    });
  }





  postfoto(){
    var url='https://f5656633.ngrok.io/analizarMuestra'
    let postData=new FormData();
    postData.append('hojas',this.mifoto);
    this.data=this.http.post(url,postData);
    this.data.subscribe(data=>{
      console.log(data)
      this.toast(data, "se mando");
    });
    this.toast("->",this.mifoto);
  }

 toast(msg,t){
let toas=this.mytoast.create({
duration:3000,
message:msg+" "+t,
position:"Button"
})
toas.present();
}

}
