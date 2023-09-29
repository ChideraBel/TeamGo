import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FootballMembersPage } from './football-members';

@NgModule({
  declarations: [
    FootballMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(FootballMembersPage),
  ],
})
export class FootballMembersPageModule {}
