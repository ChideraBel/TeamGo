import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FootballTeammanagementPage } from './football-teammanagement';

@NgModule({
  declarations: [
    FootballTeammanagementPage,
  ],
  imports: [
    IonicPageModule.forChild(FootballTeammanagementPage),
  ],
})
export class FootballTeammanagementPageModule {}
