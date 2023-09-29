import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolleyballPracticePage } from './volleyball-practice';

@NgModule({
  declarations: [
    VolleyballPracticePage,
  ],
  imports: [
    IonicPageModule.forChild(VolleyballPracticePage),
  ],
})
export class VolleyballPracticePageModule {}
