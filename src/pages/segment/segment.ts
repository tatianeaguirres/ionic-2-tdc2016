import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Segment page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html'
})
export class Segment {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Segment Page');
  }

}
