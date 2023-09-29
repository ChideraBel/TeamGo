import { BasketballDashboardPage } from './../basketball-dashboard/basketball-dashboard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-b',
  templateUrl: 'news-b.html',
})
export class NewsBPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  return(){
    this.navCtrl.setRoot(BasketballDashboardPage);
  }
}
