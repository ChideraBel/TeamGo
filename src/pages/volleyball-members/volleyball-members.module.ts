import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolleyballMembersPage } from './volleyball-members';

@NgModule({
  declarations: [
    VolleyballMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(VolleyballMembersPage),
  ],
})
export class VolleyballMembersPageModule {}
