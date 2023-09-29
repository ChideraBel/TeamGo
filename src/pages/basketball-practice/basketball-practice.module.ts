import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasketballPracticePage } from './basketball-practice';

@NgModule({
  declarations: [
    BasketballPracticePage,
  ],
  imports: [
    IonicPageModule.forChild(BasketballPracticePage),
  ],
})
export class BasketballPracticePageModule {}
