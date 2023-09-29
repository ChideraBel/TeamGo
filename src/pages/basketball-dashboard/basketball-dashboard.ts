import { NewsBPage } from './../news-b/news-b';
import { DataProvider } from './../../providers/data/data';
import { Observable } from 'rxjs/observable';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { BasketballShoppingPage } from '../basketball-shopping/basketball-shopping';

/**
 * Generated class for the BasketballDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basketball-dashboard',
  templateUrl: 'basketball-dashboard.html',
})
export class BasketballDashboardPage {
  formations: Observable<any[]>;
  formationCollection: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public afd: AngularFireDatabase, public deets: DataProvider, public afAuth: AngularFireAuth) {
    this.afAuth.auth.signInAnonymously();
    this.formationCollection = this.afd.list('/BasketballFormation');
    this.formations = this.formationCollection.valueChanges();
  }

  return(){
    this.app.getRootNav().setRoot(HomePage);
  }
  openShopping(){
    this.navCtrl.setRoot(BasketballShoppingPage);
    this.deets.setLocation2('BasketballShoppingList');
  }
  openNews(){
    this.navCtrl.setRoot(NewsBPage);
  }

}
