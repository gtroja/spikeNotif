import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

	}

	onClickEventos(){
		this.navCtrl.push('EventosPage')
	}

	onClickBG(){
		this.navCtrl.push('TesteBackgroundPage')
	}

	
}