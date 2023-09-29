import { DataProvider } from './../../providers/data/data';
import { FootballTeammanagementPage } from './../football-teammanagement/football-teammanagement';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the FootballFirstteamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-football-firstteam',
  templateUrl: 'football-firstteam.html',
})
export class FootballFirstteamPage {
  members: Observable<any[]>;
  memberCollection: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public loadCtrl: LoadingController, public deets: DataProvider) {
    const loader = this.loadCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.loadData();
  }
  //Loading data from Football Table
  loadData(){
    this.afAuth.auth.signInAnonymously();
    this.memberCollection = this.afd.list("Football");
    this.members = this.memberCollection.valueChanges();
  }

  addToFirstTeam(name){
    var db = this.afd.database.ref();
      var query = this.afd.database.ref("Football").orderByKey();
      query.once("value")
        .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var pkey = childSnapshot.key; 
          var chval = childSnapshot.val();
  
          //check if remove this child
          if(chval.Name == name && chval.FirstTeam == "No"){
            var firedata = {
              FirstTeam: "Yes"
            }
            db.child("Football/"+pkey).update(firedata);
            return true;
          }else if (chval.Name == name && chval.FirstTeam == "Yes"){
            var firedata2 = {
              FirstTeam: "No"
            }
            db.child("Football/"+pkey).update(firedata2);
            return true;
          }
        });
      });
  }
  return(){
      this.navCtrl.setRoot(FootballTeammanagementPage);
  }
}
