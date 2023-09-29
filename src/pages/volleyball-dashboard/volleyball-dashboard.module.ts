import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolleyballDashboardPage } from './volleyball-dashboard';

@NgModule({
  declarations: [
    VolleyballDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(VolleyballDashboardPage),
  ],
})
export class VolleyballDashboardPageModule {}
