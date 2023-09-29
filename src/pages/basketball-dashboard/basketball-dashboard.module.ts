import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasketballDashboardPage } from './basketball-dashboard';

@NgModule({
  declarations: [
    BasketballDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(BasketballDashboardPage),
  ],
})
export class BasketballDashboardPageModule {}
