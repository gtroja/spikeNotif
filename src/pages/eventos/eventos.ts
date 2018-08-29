import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private noti: NotificationProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
    setTimeout(this.notifica(), 2000)
  }

  notifica(){
    setTimeout(this.noti.notifica(), 10000)
  }

  ionViewDidLeave(){
    this.noti.limpa()
  }

}
