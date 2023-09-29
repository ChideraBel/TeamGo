import { BasketballFirstteamPage } from './../basketball-firstteam/basketball-firstteam';
import { DataProvider } from './../../providers/data/data';
import { FootballFormationPage } from './../football-formation/football-formation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BasketballTeammanagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basketball-teammanagement',
  templateUrl: 'basketball-teammanagement.html',
})
export class BasketballTeammanagementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public deets: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FootballTeammanagementPage');
  }
  goToFormation(){
    this.deets.setFormationLocation("/BasketballFormation/Formation");
    this.navCtrl.setRoot(FootballFormationPage);
  }
  goToFirstTeam(){
    this.navCtrl.setRoot(BasketballFirstteamPage);
  }

}
