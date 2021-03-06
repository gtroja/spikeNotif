import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RemoteEventProvider } from '../providers/remote-event/remote-event';
import { NotificationProvider } from '../providers/notification/notification';
import { Firebase } from '@ionic-native/firebase';
import { NotificacaoProvider } from '../providers/notificacao/notificacao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteEventProvider,
    NotificationProvider,
    Firebase,
    NotificacaoProvider
  ]
})
export class AppModule {}
