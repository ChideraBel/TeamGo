import { BasketballDashboardPage } from './../basketball-dashboard/basketball-dashboard';
import { DataProvider } from './../../providers/data/data';
import { AddItemPage } from './../add-item/add-item';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';
/**
 * Generated class for the BasketballShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basketball-shopping',
  templateUrl: 'basketball-shopping.html',
})
export class BasketballShoppingPage {
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
    this.shoppingItemsCollection = this.afd.list("BasketballShoppingList");
    this.shoppingItems = this.shoppingItemsCollection.valueChanges();
  }
  openModal(){
    let addItemModal = this.modalCtrl.create(AddItemPage);
    addItemModal.present();
  }

  deleteItem(member){
    var db = this.afd.database.ref();
    var query = this.afd.database.ref("BasketballShoppingList").orderByKey();
    query.once("value")
      .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var pkey = childSnapshot.key; 
        var chval = childSnapshot.val();

        //check if remove this child
        if(chval.Name == member.Name && chval.Store == member.Store){
          db.child("BasketballShoppingList/"+pkey).remove();
          return true;
        }

      });
    });
  }
  return(){
      this.navCtrl.setRoot(BasketballDashboardPage);
    }

}
