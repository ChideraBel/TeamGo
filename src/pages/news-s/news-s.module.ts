import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsSPage } from './news-s';

@NgModule({
  declarations: [
    NewsSPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsSPage),
  ],
})
export class NewsSPageModule {}
