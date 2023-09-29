import { DataProvider } from './../../providers/data/data';
import { VolleyballFirstteamPage } from './../volleyball-firstteam/volleyball-firstteam';
import { FootballFormationPage } from './../football-formation/football-formation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VolleyballTeammanagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volleyball-teammanagement',
  templateUrl: 'volleyball-teammanagement.html',
})
export class VolleyballTeammanagementPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public deets: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FootballTeammanagementPage');
  }
  goToFormation(){
    this.deets.setFormationLocation("/VolleyballFormation/Formation");
    this.navCtrl.setRoot(FootballFormationPage);
  }
  goToFirstTeam(){
    this.navCtrl.setRoot(VolleyballFirstteamPage);
  }

}
