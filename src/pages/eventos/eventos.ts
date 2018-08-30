import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import { NotificationProvider } from '../../providers/notification/notification';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  public texto : string = "";
  public token : string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private noti: NotificationProvider, private  fireBase: Firebase ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
    setTimeout(this.notifica(), 2000)

      this.fireBase.getToken()
      .then(token =>{this.texto += `recebi o token\n`; this.token = token}) // save the token server-side and use it to push notifications to this device
      .catch(error => this.texto += ('Error getting token' +  error))
    
    this.fireBase.onTokenRefresh()
      .subscribe((token: string) => this.texto += (`Got a new token ${token}`))
    
  }

  notifica(){
    setTimeout(this.noti.notifica(), 10000)
  }

  ionViewDidLeave(){
    this.noti.limpa()
  }

}
