import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasketballMembersPage } from './basketball-members';

@NgModule({
  declarations: [
    BasketballMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(BasketballMembersPage),
  ],
})
export class BasketballMembersPageModule {}
