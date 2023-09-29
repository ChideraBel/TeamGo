import { ForgotPasswordPage } from './../forgot-password/forgot-password';
import { RegisterPage } from './../register/register';
import { User } from './../../models/user.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
user = {} as User;
loginError: string;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public toastCtrl: ToastController) { 
       }


  async Login(user: User){
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
    .then(
      (use) => {
        let user1 = firebase.auth().currentUser;
        if(user1.emailVerified == true) {

           this.presentToast("You're In!");
           this.changePage();
          // Redirect the user here 
        } else {
          // Tell the user to have a look at its mailbox 
           this.presentToast("This email is not verified, please check your mail for a link and try again.");
           user1.sendEmailVerification();
        }
      },
      error => this.presentToast(error.message)
    );
    
    
  }
  Register(){
    this.navCtrl.setRoot(RegisterPage);
  }

  presentToast(error){
    const toast = this.toastCtrl.create({
      message: error,
      duration: 2000
    });
    toast.present();
  }

  changePage(){
    this.navCtrl.setRoot(HomePage)
    this.presentToast("You're in!")
  }

  openForgotPassword(user: User){
    this.navCtrl.setRoot(ForgotPasswordPage)
  }
}


