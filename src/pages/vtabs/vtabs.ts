import { VolleyballTeammanagementPage } from './../volleyball-teammanagement/volleyball-teammanagement';
import { VolleyballMembersPage } from './../volleyball-members/volleyball-members';
import { VolleyballPracticePage } from './../volleyball-practice/volleyball-practice';
import { VolleyballDashboardPage } from './../volleyball-dashboard/volleyball-dashboard';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'vtabs.html'
})
export class VtabsPage {

  tab1Root = VolleyballDashboardPage;
  tab2Root = VolleyballPracticePage;
  tab3Root = VolleyballMembersPage;
  tab4Root = VolleyballTeammanagementPage;

  constructor() {

  }
}
