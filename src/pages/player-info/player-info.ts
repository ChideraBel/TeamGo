import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the PlayerInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player-info',
  templateUrl: 'player-info.html',
})
export class PlayerInfoPage {
pic: string;
playerName: string;
playerAge: number;
playerGrade: string;
playerColor: string;
playerPos: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
  this.pic = "assets/imgs/profile.png";
  this.playerName = data.getPlayerName();
  this.playerAge = data.getPlayerAge();
  this.playerColor = data.getPlayerColor();
  this.playerGrade = data.getPlayerGrade();
  this.playerPos = data.getPlayerPos();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerInfoPage');
  }

}
