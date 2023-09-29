import { VolleyballDashboardPage } from './../volleyball-dashboard/volleyball-dashboard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsVPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-v',
  templateUrl: 'news-v.html',
})
export class NewsVPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsVPage');
  }
  return(){
    this.navCtrl.setRoot(VolleyballDashboardPage);
  }
}
