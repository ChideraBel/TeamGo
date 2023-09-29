import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolleyballTeammanagementPage } from './volleyball-teammanagement';

@NgModule({
  declarations: [
    VolleyballTeammanagementPage,
  ],
  imports: [
    IonicPageModule.forChild(VolleyballTeammanagementPage),
  ],
})
export class VolleyballTeammanagementPageModule {}
