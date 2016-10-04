import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-fabs',
  templateUrl: 'fabs.html'
})
export class Fabs {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Fabs Page');
  }

}
