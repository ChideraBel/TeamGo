import { VolleyballShoppingPage } from './../volleyball-shopping/volleyball-shopping';
import { NewsVPage } from './../news-v/news-v';
import { DataProvider } from './../../providers/data/data';
import { Observable } from 'rxjs/observable';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the VolleyballDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volleyball-dashboard',
  templateUrl: 'volleyball-dashboard.html',
})
export class VolleyballDashboardPage {
  formations: Observable<any[]>;
  formationCollection: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App,  public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public sdp: DataProvider) {
    this.afAuth.auth.signInAnonymously();
    this.formationCollection = this.afd.list('/VolleyballFormation');
    this.formations = this.formationCollection.valueChanges();
  }

  return(){
    this.app.getRootNav().setRoot(HomePage);
  }
  openShopping(){
    this.navCtrl.setRoot(VolleyballShoppingPage);
    this.sdp.setLocation2('VolleyballShoppingList');
  }
  openNews(){
    this.navCtrl.setRoot(NewsVPage);
  }

}