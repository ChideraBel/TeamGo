import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsVPage } from './news-v';

@NgModule({
  declarations: [
    NewsVPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsVPage),
  ],
})
export class NewsVPageModule {}
