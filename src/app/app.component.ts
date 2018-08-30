import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private  fireBase: Firebase) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.firebaseSetup()
    });
  }

  firebaseSetup(){
    this.fireBase.getToken()
    .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
    .catch(error => console.error('Error getting token', error))
  
  this.fireBase.onTokenRefresh()
    .subscribe((token: string) => console.log(`Got a new token ${token}`))

  this.fireBase.onNotificationOpen().subscribe(
    (abriu)=>{
      console.log("usuario abriu notificação",abriu)
    },
    (err)=>{
      console.log("erro ao abrir notificação", err);
    }
  )

  }
}

