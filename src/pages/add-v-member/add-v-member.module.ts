import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVMemberPage } from './add-v-member';

@NgModule({
  declarations: [
    AddVMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(AddVMemberPage),
  ],
})
export class AddVMemberPageModule {}
