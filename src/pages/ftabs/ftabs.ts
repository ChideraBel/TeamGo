import { FootballTeammanagementPage } from './../football-teammanagement/football-teammanagement';
import { FootballMembersPage } from './../football-members/football-members';
import { FootballPracticePage } from './../football-practice/football-practice';
import { FootballDashboardPage } from './../football-dashboard/football-dashboard';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'ftabs.html'
})
export class FtabsPage {

  tab1Root = FootballDashboardPage;
  tab2Root = FootballPracticePage;
  tab3Root = FootballMembersPage;
  tab4Root = FootballTeammanagementPage;

  constructor() {

  }
}
