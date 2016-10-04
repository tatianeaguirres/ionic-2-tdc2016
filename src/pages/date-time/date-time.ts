import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-date-time',
  templateUrl: 'date-time.html'
})
export class DateTime {
  public event = {
    month: '2016-10-07',
    timeStarts: '10:15',
  }

}
