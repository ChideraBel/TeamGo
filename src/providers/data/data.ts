import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {
  public location: string
  public name: string;
  public grade: string;
  public age: number;
  public color: string;
  public pos: string;
  public location2: string;
  public formLoca: string;
  public news: string;
constructor(){

}
  setLocation(loca){
    this.location = loca;
  }

  getLocation(){
    return this.location;
  }
  
  setPlayerInfo(Name, Grade, Age, Color, Pos){
    this.name = Name;
    this.grade = Grade;
    this.age = Age;
    this.color = Color;
    this.pos = Pos;
  }

  getPlayerName(){
    return this.name;
  }
  getPlayerGrade(){
    return this.grade;
  }
  getPlayerAge(){
    return this.age;
  }
  getPlayerColor(){
    return this.color;
  }
  getPlayerPos(){
    return this.pos;
  }
  setLocation2(loca){
    this.location2 = loca;
  }

  getLocation2(){
    return this.location2;
  }

  setFormationLocation(formLoca){
    this.formLoca = formLoca;
  }

  getFormationLocation(){
    return this.formLoca;
  }

}

