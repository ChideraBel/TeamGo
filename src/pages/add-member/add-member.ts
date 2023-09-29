import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { isPresent } from 'ionic-angular/umd/util/util';
/**
 * Generated class for the AddMemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-member',
  templateUrl: 'add-member.html',
})
export class AddMemberPage {
name: string;
age: number;
position: string;
color: string;
grade: number;
studentID: string;
public keys;
positions: Array <{name: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public afAuth: AngularFireAuth, public afd: AngularFireDatabase, public deets: DataProvider, public toastCtrl: ToastController) {
    this.afAuth.auth.signInAnonymously();
    this.loadPositions(this.deets.getLocation());
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }
  //Adding new memeber details to the Members table
  addMember(){
    try{
      var firedata = {
        Age: this.age,
        ColorGroup: this.color,
        Grade: this.grade,
        Name: this.name,
        Position: this.position,
        FirstTeam: "No"
      }
      this.afd.list(this.deets.getLocation()).push(firedata);
  
        
    var firedata2 = {
      Name: this.name,
      Present: "No"
    }
  this.afd.list(this.deets.getLocation()+"Practice").push(firedata2);
  
    this.presentToast("The new player was added successfully!");
    this.viewCtrl.dismiss();
    }catch(e){
      this.presentToast("Please check that all the information is properly entered");
    } 
  }
  presentToast(message){
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  loadPositions(location){
    if(location == "/Football"){
    this.positions = [
      {name: "Goalkeeper"},
      {name: "Right Fullback"},
      {name: "Left Fullback"},
      {name: "Center Back"},
      {name: "Center Forward"},
      {name: "Defending Midfielder"},
      {name: "Right Winger"},
      {name: "Left Winger"},
      {name: "Central Midfielder"},
      {name: "Striker"},
      {name: "Attacking Midfielder"},
    ];
    }
    if(location == "/Basketball"){
      this.positions = [
        {name: "Shooting Guard"},
        {name: "Point Guard"},
        {name: "Power Forward"},
        {name: "Small Forward"},
        {name: "Center"},
        {name: "Sixth Person"},
        {name: "Defensive Stopper"},
      ];  
    }
    if(location == "/Volleyball"){
      this.positions = [
        {name: "Outside Hitter"},
        {name: "Right Side Hitter"},
        {name: "Opposite Hitter"},
        {name: "Middle Blocker"},
        {name: "Setter"},
        {name: "Libero"},
        {name: "Defensive Specialist"},
      ];
    }
  }

}
