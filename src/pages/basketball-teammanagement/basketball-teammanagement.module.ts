import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasketballTeammanagementPage } from './basketball-teammanagement';

@NgModule({
  declarations: [
    BasketballTeammanagementPage,
  ],
  imports: [
    IonicPageModule.forChild(BasketballTeammanagementPage),
  ],
})
export class BasketballTeammanagementPageModule {}
