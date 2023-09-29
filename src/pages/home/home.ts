import { LoginPage } from './../login/login';
import { VtabsPage } from './../vtabs/vtabs';
import { TabsPage } from './../tabs/tabs';
import { FtabsPage } from './../ftabs/ftabs';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array <{name: string, component: any}>;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.pages = [
      {name: "Football", component: FtabsPage},
      {name: "Basketball", component: TabsPage},
      {name: "Volleyball", component: VtabsPage},
    ];
  }
  openPage(comp){
    this.navCtrl.setRoot(comp);
  }
  logOut(){
    this.navCtrl.setRoot(LoginPage);
    this.presentToast("You've been logged out");
  }
  presentToast(message){
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}

