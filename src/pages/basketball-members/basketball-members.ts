import { PlayerInfoPage } from './../player-info/player-info';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AddMemberPage } from '../add-member/add-member';

@IonicPage()
@Component({
  selector: 'page-basketball-members',
  templateUrl: 'basketball-members.html',
})

export class BasketballMembersPage {
  members: Observable<any[]>;
  memberCollection: AngularFireList<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public modalCtrl: ModalController, public deets: DataProvider, public loadCtrl: LoadingController) {
    const loader = this.loadCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.loadData();
  }
    loadData(){
      this.afAuth.auth.signInAnonymously();
      this.memberCollection = this.afd.list('/Basketball');
      this.members = this.memberCollection.valueChanges();
      this.deets.setLocation("/Basketball");
    }
    openModal(){
      let addMemberModal = this.modalCtrl.create(AddMemberPage);
      addMemberModal.present();
    }

    deleteItem(member){
      var db = this.afd.database.ref();
      var query = this.afd.database.ref("Basketball").orderByKey();
      query.once("value")
        .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var pkey = childSnapshot.key; 
          var chval = childSnapshot.val();
  
          //check if remove this child
          if(chval.Name == member.Name && chval.Position == member.Position){
            db.child("Basketball/"+pkey).remove();
            return true;
          }
  
        });
      });

      var query1 = this.afd.database.ref("BasketballPractice").orderByKey();
      query1.once("value")
        .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var pkey = childSnapshot.key; 
          var chval = childSnapshot.val();
  
          //check if remove this child
          if(chval.Name == member.Name){
            db.child("BasketballPractice/"+pkey).remove();
            return true;
          }
  
        });
      });
    }
    viewPlayer(name, grade, age, color, pos){
      this.deets.setPlayerInfo(name, grade, age, color, pos);
      this.navCtrl.push(PlayerInfoPage);
    }
}
