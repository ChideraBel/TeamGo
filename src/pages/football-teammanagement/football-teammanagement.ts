import { DataProvider } from './../../providers/data/data';
import { FootballFirstteamPage } from './../football-firstteam/football-firstteam';
import { FootballFormationPage } from './../football-formation/football-formation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the FootballTeammanagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-football-teammanagement',
  templateUrl: 'football-teammanagement.html',
})
export class FootballTeammanagementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public deets: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FootballTeammanagementPage');
  }
  goToFormation(){
    this.deets.setFormationLocation("/FootballFormation/Formation");
    this.navCtrl.setRoot(FootballFormationPage);
  }
  goToFirstTeam(){
    this.navCtrl.setRoot(FootballFirstteamPage);
  }

}
