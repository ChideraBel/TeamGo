import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from 'firebase';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  user = {} as User
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  return(){
    this.navCtrl.setRoot(LoginPage)
  }

  presentToast(error){
    const toast = this.toastCtrl.create({
      message: error,
      duration: 2000
    });
    toast.present();
  }

  doForgetPassword(user: User){
    if(user.email = ""){
      this.presentToast("Please enter your email")
    }else{
    this.afAuth.auth.sendPasswordResetEmail(user.email)
    .then(
      () => {
        this.presentToast("Please check your email for the link to reset your password")
      },
      error => this.presentToast(error.message)
    );
    }
  }
}
