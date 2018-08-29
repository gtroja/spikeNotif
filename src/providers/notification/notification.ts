import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
/**
 * Serviço de notificações locais
 * 
 */

@Injectable()
export class NotificationProvider {

  constructor(
    private localNotifications: LocalNotifications
  ){   
  }

  notifica(){
    let isAndroid = true;
    this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      data: "teste de notificacap"
    });
  }
  
  limpa(){
    this.localNotifications.clearAll()
  }
}
