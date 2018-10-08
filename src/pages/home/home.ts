import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase'
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    private firebase: Firebase
  ) {

  }

  ionViewDidEnter(){
    this.platform.ready().then(()=>{
      this.fireBaseSetup()
    })
  }
  

  message : string = "\n";

  say(what){
    this.message += what + "\n"; 
  }

  fireBaseSetup(){
    this.firebase.getToken().then(
      (ok)=>{
        this.say(`recebi ${ok}`)

      },
      err=>{
        this.say(err)
      }
    )

  }

}
