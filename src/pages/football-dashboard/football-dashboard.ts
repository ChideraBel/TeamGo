import { DataProvider } from './../../providers/data/data';
import { NewsPage } from './../news/news';
import { FootballShoppingPage } from './../football-shopping/football-shopping';
import { Observable } from 'rxjs/observable';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the BasketballDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-football-dashboard',
  templateUrl: 'football-dashboard.html',
})
export class FootballDashboardPage {
  formations: Observable<any[]>;
  formationCollection: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App,  public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public sdp: DataProvider) {
    this.afAuth.auth.signInAnonymously();
    this.formationCollection = this.afd.list('/FootballFormation');
    this.formations = this.formationCollection.valueChanges();
  }

  return(){
    this.app.getRootNav().setRoot(HomePage);
  }
  openShopping(){
    this.navCtrl.setRoot(FootballShoppingPage);
    this.sdp.setLocation2('FootballShoppingList');
  }
  openNews(){
    this.navCtrl.setRoot(NewsPage);
  }

}
