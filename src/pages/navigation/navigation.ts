import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { ListPage } from '../list/list'

@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html'
})
export class Navigation {

  constructor(public navCtrl: NavController) {}

  goToHome() {
    this.navCtrl.push(HomePage);
  }

  goToList() {
    this.navCtrl.push(ListPage);
  }

}
