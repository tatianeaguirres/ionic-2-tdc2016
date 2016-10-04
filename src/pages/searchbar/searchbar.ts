import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Searchbar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html'
})
export class Searchbar {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Searchbar Page');
  }

}
