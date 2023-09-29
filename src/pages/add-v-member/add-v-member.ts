import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the AddVMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-v-member',
  templateUrl: 'add-v-member.html',
})
export class AddVMemberPage {
  name: string;
  age: number;
  stroke: string;
  color: string;
  grade: number;
  studentID: string;
  public keys;
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public toastCtrl: ToastController) {
      this.afAuth.auth.signInAnonymously();
    }
  
    closeModal(){
      this.viewCtrl.dismiss();
    }
    
    addMember(){
      var firedata = {
        Age: this.age,
        ColorGroup: this.color,
        Grade: this.grade,
        Name: this.name,
        PrefferedStroke: this.stroke,
      }
    this.afd.list("Swimming").push(firedata);
    this.presentToast();
    this.viewCtrl.dismiss();
    }

    presentToast(){
      const toast = this.toastCtrl.create({
        message: "The new player was added successfully!",
        duration: 2000
      });
      toast.present();
    }
  
  }