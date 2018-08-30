import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalNotifications, ILocalNotification } from '@ionic-native/local-notifications';
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
  

  agendaNotificação(dateTime){
    let notificacao : ILocalNotification
    notificacao = {
      title : "Titulo da notificação",
      text : "texto da notificação",
      badge : 3,
      data : "campo data da notificaçãoe",
      color : "889922",
      vibrate : true,
      led:true,
      priority:2,
      silent:false,
      launch:false,
      wakeup:true,
      timeoutAfter: 3000,
      actions:"TODO",
      clock:true,
    }
    this.localNotifications.schedule()
  }
  
  limpa(){
    this.localNotifications.clearAll()
  }
}
