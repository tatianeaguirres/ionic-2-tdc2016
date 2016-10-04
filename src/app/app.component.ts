import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ActionSheets } from '../pages/action-sheets/action-sheets';
import { Alerts } from '../pages/alerts/alerts';
import { Badges } from '../pages/badges/badges';
import { CardBackgroundImages } from '../pages/card-background-images/card-background-images';
import { DateTime } from '../pages/date-time/date-time';
import { Fabs } from '../pages/fabs/fabs';
import { Modals } from '../pages/modals/modals';
import { Navigation } from '../pages/navigation/navigation';
import { Popover } from '../pages/popover/popover';
import { Searchbar } from '../pages/searchbar/searchbar';
import { Segment } from '../pages/segment/segment';
import { Slides } from '../pages/slides/slides';
import { Toast } from '../pages/toast/toast';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Action Sheets', component: ActionSheets },
      { title: 'Alerts', component: Alerts },
      { title: 'Badges', component: Badges },
      { title: 'Card Background Images', component: CardBackgroundImages },
      { title: 'Date Time', component: DateTime },
      { title: 'Fabs', component: Fabs },
      { title: 'Modals', component: Modals },
      { title: 'Navigation', component: Navigation },
      { title: 'Popover', component: Popover },
      { title: 'Searchbar', component: Searchbar },
      { title: 'Segment', component: Segment },
      { title: 'Slides', component: Slides },
      { title: 'Toast', component: Toast }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
