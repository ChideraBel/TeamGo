import { DataProvider } from './../../providers/data/data';
import { FootballDashboardPage } from './../football-dashboard/football-dashboard';
import { AddItemPage } from './../add-item/add-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';
/**
 * Generated class for the FootballShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-football-shopping',
  templateUrl: 'football-shopping.html',
})
export class FootballShoppingPage {
  shoppingItems: Observable<any[]>;
  shoppingItemsCollection: AngularFireList<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public modalCtrl: ModalController, public loadCtrl: LoadingController, public sdp: DataProvider) {
    const loader = this.loadCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.loadData();
  }
  //Loading data from ShoppingList Table
  loadData(){
    this.afAuth.auth.signInAnonymously();
    this.shoppingItemsCollection = this.afd.list("FootballShoppingList");
    this.shoppingItems = this.shoppingItemsCollection.valueChanges();
  }
  openModal(){
    let addItemModal = this.modalCtrl.create(AddItemPage);
    addItemModal.present();
  }

  deleteItem(member){
    var db = this.afd.database.ref();
    var query = this.afd.database.ref("FootballShoppingList").orderByKey();
    query.once("value")
      .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var pkey = childSnapshot.key; 
        var chval = childSnapshot.val();

        //check if remove this child
        if(chval.Name == member.Name && chval.Store == member.Store){
          db.child("FootballShoppingList/"+pkey).remove();
          return true;
        }

      });
    });
  }
  return(){
      this.navCtrl.setRoot(FootballDashboardPage);
    }

}
