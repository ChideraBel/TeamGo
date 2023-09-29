import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsBPage } from './news-b';

@NgModule({
  declarations: [
    NewsBPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsBPage),
  ],
})
export class NewsBPageModule {}
