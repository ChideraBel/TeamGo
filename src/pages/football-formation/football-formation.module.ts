import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FootballFormationPage } from './football-formation';

@NgModule({
  declarations: [
    FootballFormationPage,
  ],
  imports: [
    IonicPageModule.forChild(FootballFormationPage),
  ],
})
export class FootballFormationPageModule {}
