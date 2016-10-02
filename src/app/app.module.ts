import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ActionSheets } from '../pages/action-sheets/action-sheets';
import { Alerts } from '../pages/alerts/alerts';
import { Badges } from '../pages/badges/badges';
import { CardBackgroundImages } from '../pages/card-background-images/card-background-images';
import { DateTime } from '../pages/date-time/date-time';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheets,
    Alerts,
    Badges,
    CardBackgroundImages,
    DateTime
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheets,
    Alerts,
    Badges,
    CardBackgroundImages,
    DateTime
  ],
  providers: []
})
export class AppModule {}
