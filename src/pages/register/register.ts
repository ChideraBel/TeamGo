import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './../../models/user.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import * as firebase from 'firebase';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 user = {} as User;
 public confirmPassword;
 public name;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  //Register new user with Firebase Authentication
  async register(user: User){
    if(user.password == this.confirmPassword){
      const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(
      res => {
        this.finishRegistering();
        let user = firebase.auth().currentUser;
        user.sendEmailVerification()
        this.navCtrl.setRoot(LoginPage);
      },
      error => this.presentToast(error.message)
      );
    }else{
    this.presentToast("Passwords entered do not match!")
    }
  }

  presentToast(error){
    const toast = this.toastCtrl.create({
      message: error,
      duration: 2000
    });
    toast.present();
  }

  return(){
    this.navCtrl.setRoot(LoginPage);
  }

  finishRegistering(){
    this.navCtrl.setRoot(LoginPage);
    this.presentToast("Please check your email to verify your account!")
  }


}
