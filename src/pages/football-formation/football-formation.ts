import { BasketballTeammanagementPage } from './../basketball-teammanagement/basketball-teammanagement';
import { DataProvider } from './../../providers/data/data';
import { FootballTeammanagementPage } from './../football-teammanagement/football-teammanagement';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { VolleyballTeammanagementPage } from '../volleyball-teammanagement/volleyball-teammanagement';

/**
 * Generated class for the FootballFormationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-football-formation',
  templateUrl: 'football-formation.html',
})
export class FootballFormationPage {
formations: Array<{formationName: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afd: AngularFireDatabase, public toastCtrl: ToastController, public deets: DataProvider) {
    if(this.deets.formLoca == "/FootballFormation/Formation"){
    this.formations = [{formationName: "3-4-3"},
                       {formationName: "3-5-2"},
                       {formationName: "4-2-3-1"},
                       {formationName: "4-3-3"},
                       {formationName: "4-4-1-1"},
                       {formationName: "4-4-2"},
                       {formationName: "4-5-1"},
                       {formationName: "5-3-2"},
];
    }else if (this.deets.formLoca == "/BasketballFormation/Formation"){
      this.formations = [{formationName: "1-2-2"},
      {formationName: "1-3-1"},
      {formationName: "2-1-2"},
      {formationName: "2-3"},
      {formationName: "3-2"},
      {formationName: "MatchUp"},
];
}else if (this.deets.formLoca == "/VolleyballFormation/Formation"){
  this.formations = [{formationName: "4-2"},
  {formationName: "5-1"},
  {formationName: "6-2"},
];
}

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FootballFormationPage');
  }
  return(){
    if(this.deets.getFormationLocation() == "/FootballFormation/Formation"){
      this.navCtrl.setRoot(FootballTeammanagementPage);
    }else if(this.deets.getFormationLocation() == "/BasketballFormation/Formation"){
      this.navCtrl.setRoot(BasketballTeammanagementPage);
    }else if(this.deets.getFormationLocation() == "/VolleyballFormation/Formation"){
      this.navCtrl.setRoot(VolleyballTeammanagementPage);
    }
  }
  //Saving selected formation to DB online
  saveFormation(formation){
    var firedata = {
      Name: formation
    }
  this.afd.object(this.deets.getFormationLocation()).update(firedata);
  this.presentToast(formation);
}
  presentToast(formation){
    const toast = this.toastCtrl.create({
      message: "You have changed your fomation to "+formation+" successfully!",
      duration: 2000
    });
    toast.present();
  }
}
