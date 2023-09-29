import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FootballPracticePage } from './football-practice';

@NgModule({
  declarations: [
    FootballPracticePage,
  ],
  imports: [
    IonicPageModule.forChild(FootballPracticePage),
  ],
})
export class FootballPracticePageModule {}
