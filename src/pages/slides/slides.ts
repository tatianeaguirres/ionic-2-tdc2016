import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Slides page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class Slides {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Slides Page');
  }

}
