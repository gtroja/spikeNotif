import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';

/**
 * Generated class for the TesteBackgroundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teste-background',
  templateUrl: 'teste-background.html',
})
export class TesteBackgroundPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public bg : BackgroundMode) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TesteBackgroundPage');
  }
  ionViewDidEnter(){
    this.goToBackGround()
  }

  goToBackGround(){
    this.bg.enable()
    this.bg.setDefaults({
      title: "teste",
      text: "teste de background",
      icon: 'icon', // this will look for icon.png in platforms/android/res/drawable|mipmap
      color: 'F14F4D', // hex format like 'F14F4D'
      resume: true,
      hidden: false,
      bigText: false
  })
  }

}
