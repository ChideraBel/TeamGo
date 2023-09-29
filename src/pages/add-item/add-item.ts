import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  itemName: string;
  quantity: number;
  store: string;

  public keys;
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public deets: DataProvider, public toastCtrl: ToastController) {
      this.afAuth.auth.signInAnonymously();
    }
  
    closeModal(){
      this.viewCtrl.dismiss();
    }
    //Adding new item details to the Members table
    addShoppingItem(){
      var firedata = {
        Quantity: this.quantity,
        Name: this.itemName,
        Store: this.store,
      }
    this.afd.list(this.deets.getLocation2()).push(firedata);
  
    this.presentToast();
    this.viewCtrl.dismiss();
    }
    presentToast(){
      const toast = this.toastCtrl.create({
        message: "The new item was added successfully!",
        duration: 2000
      });
      toast.present();
    }
  
  }
  