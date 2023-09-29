import { BasketballTeammanagementPage } from './../basketball-teammanagement/basketball-teammanagement';
import { BasketballMembersPage } from './../basketball-members/basketball-members';
import { BasketballPracticePage } from './../basketball-practice/basketball-practice';
import { BasketballDashboardPage } from './../basketball-dashboard/basketball-dashboard';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BasketballDashboardPage;
  tab2Root = BasketballPracticePage;
  tab3Root = BasketballMembersPage;
  tab4Root = BasketballTeammanagementPage;

  constructor() {

  }
}
