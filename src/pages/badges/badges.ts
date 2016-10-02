import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-badges',
  templateUrl: 'badges.html'
})
export class Badges {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Badges Page');
  }

}
