import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the BasketballPracticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basketball-practice',
  templateUrl: 'basketball-practice.html',
})
export class BasketballPracticePage {
  members: Observable<any>;
  memberCollection: AngularFireList<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public loadCtrl: LoadingController) {

  const loader = this.loadCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.loadData();

  }
    loadData(){
      this.afAuth.auth.signInAnonymously();
      this.memberCollection = this.afd.list('/BasketballPractice');
      this.members = this.memberCollection.valueChanges();
    }

    present(name){ 
      var db = this.afd.database.ref();
      var query = this.afd.database.ref("BasketballPractice").orderByKey();
      query.once("value")
        .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var pkey = childSnapshot.key; 
          var chval = childSnapshot.val();
  
          //check if remove this child
          if(chval.Name == name && chval.Present == "No"){
            var firedata = {
              Present: "Yes"
            }
            db.child("BasketballPractice/"+pkey).update(firedata);
            return true;
          }else if (chval.Name == name && chval.Present == "Yes"){
            var firedata2 = {
              Present: "No"
            }
            db.child("BasketballPractice/"+pkey).update(firedata2);
            return true;
          }
        });
      });
  }


}
