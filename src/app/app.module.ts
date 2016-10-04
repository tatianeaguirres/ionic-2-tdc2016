import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ActionSheets } from '../pages/action-sheets/action-sheets';
import { Alerts } from '../pages/alerts/alerts';
import { Badges } from '../pages/badges/badges';
import { CardBackgroundImages } from '../pages/card-background-images/card-background-images';
import { DateTime } from '../pages/date-time/date-time';
import { Fabs } from '../pages/fabs/fabs';
import { Modals } from '../pages/modals/modals';
import { ModalsContent } from '../pages/modals/modals';
import { Navigation } from '../pages/navigation/navigation';

import { Searchbar } from '../pages/searchbar/searchbar';
import { Segment } from '../pages/segment/segment';
import { Slides } from '../pages/slides/slides';
import { Toast } from '../pages/toast/toast';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    ActionSheets,
    Alerts,
    Badges,
    CardBackgroundImages,
    DateTime,
    Fabs,
    Modals,
    ModalsContent,
    Navigation,

    Searchbar,
    Segment,
    Slides,
    Toast
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    ListPage,
    ActionSheets,
    Alerts,
    Badges,
    CardBackgroundImages,
    DateTime,
    Fabs,
    Modals,
    ModalsContent,
    Navigation,

    Searchbar,
    Segment,
    Slides,
    Toast
  ],
  providers: []
})
export class AppModule {}
