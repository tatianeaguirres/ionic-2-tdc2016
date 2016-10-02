import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-card-background-images',
  templateUrl: 'card-background-images.html'
})
export class CardBackgroundImages {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CardBackgroundImages Page');
  }

}
