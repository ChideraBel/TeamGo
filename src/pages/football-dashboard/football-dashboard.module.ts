import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FootballDashboardPage } from './football-dashboard';

@NgModule({
  declarations: [
    FootballDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(FootballDashboardPage),
  ],
})
export class FootballDashboardPageModule {}
