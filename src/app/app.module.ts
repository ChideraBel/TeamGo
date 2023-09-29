import { ForgotPasswordPage } from './../pages/forgot-password/forgot-password';
import { BasketballShoppingPage } from './../pages/basketball-shopping/basketball-shopping';
import { VolleyballFirstteamPage } from './../pages/volleyball-firstteam/volleyball-firstteam';
import { NewsSPage } from './../pages/news-s/news-s';
import { NewsVPage } from './../pages/news-v/news-v';
import { NewsBPage } from './../pages/news-b/news-b';
import { NewsPage } from './../pages/news/news';
import { AddItemPage } from './../pages/add-item/add-item';
import { FootballShoppingPage } from './../pages/football-shopping/football-shopping';
import { FootballFormationPage } from './../pages/football-formation/football-formation';
import { FootballFirstteamPage } from './../pages/football-firstteam/football-firstteam';
import { PlayerInfoPage } from './../pages/player-info/player-info';
import { AddMemberPage } from './../pages/add-member/add-member';
import { VtabsPage } from './../pages/vtabs/vtabs';
import { FtabsPage } from './../pages/ftabs/ftabs';
import { VolleyballTeammanagementPage } from './../pages/volleyball-teammanagement/volleyball-teammanagement';
import { FootballTeammanagementPage } from './../pages/football-teammanagement/football-teammanagement';
import { FootballPracticePage } from './../pages/football-practice/football-practice';
import { FootballMembersPage } from './../pages/football-members/football-members';
import { FootballDashboardPage } from './../pages/football-dashboard/football-dashboard';
import { BasketballTeammanagementPage } from './../pages/basketball-teammanagement/basketball-teammanagement';
import { BasketballPracticePage } from './../pages/basketball-practice/basketball-practice';
import { BasketballMembersPage } from './../pages/basketball-members/basketball-members';
import { BasketballDashboardPage } from './../pages/basketball-dashboard/basketball-dashboard';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage'
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VolleyballDashboardPage } from '../pages/volleyball-dashboard/volleyball-dashboard';
import { VolleyballMembersPage } from '../pages/volleyball-members/volleyball-members';
import { VolleyballPracticePage } from '../pages/volleyball-practice/volleyball-practice';
import { DataProvider } from '../providers/data/data';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from './credentials';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AddVMemberPage } from '../pages/add-v-member/add-v-member';
import { BasketballFirstteamPage } from '../pages/basketball-firstteam/basketball-firstteam';
import { VolleyballShoppingPage } from '../pages/volleyball-shopping/volleyball-shopping';
import { RegisterPage } from '../pages/register/register';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FtabsPage,
    VtabsPage,
    LoginPage,
    BasketballDashboardPage,
    BasketballMembersPage,
    BasketballPracticePage,
    BasketballTeammanagementPage,
    BasketballFirstteamPage,
    FootballDashboardPage,
    FootballMembersPage,
    FootballPracticePage,
    FootballTeammanagementPage,
    FootballShoppingPage,
    BasketballShoppingPage,
    VolleyballShoppingPage,
    VolleyballDashboardPage,
    VolleyballMembersPage,
    VolleyballPracticePage,
    VolleyballTeammanagementPage,
    VolleyballFirstteamPage,
    AddMemberPage,
    AddVMemberPage,
    AddItemPage,
    PlayerInfoPage,
    FootballFirstteamPage,
    FootballFormationPage,
    NewsPage,
    NewsBPage,
    NewsVPage,
    NewsSPage,
    RegisterPage,
    ForgotPasswordPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FtabsPage,
    VtabsPage,
    LoginPage,
    BasketballDashboardPage,
    BasketballMembersPage,
    BasketballPracticePage,
    BasketballTeammanagementPage,
    BasketballFirstteamPage,
    FootballDashboardPage,
    FootballMembersPage,
    FootballPracticePage,
    FootballTeammanagementPage,
    FootballShoppingPage,
    BasketballShoppingPage,
    VolleyballShoppingPage,
    VolleyballDashboardPage,
    VolleyballMembersPage,
    VolleyballPracticePage,
    VolleyballTeammanagementPage,
    VolleyballFirstteamPage,
    AddMemberPage,
    AddVMemberPage,
    AddItemPage,
    PlayerInfoPage,
    FootballFirstteamPage,
    FootballFormationPage,
    NewsPage,
    NewsBPage,
    NewsVPage,
    NewsSPage,
    RegisterPage,
    ForgotPasswordPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
  ]
})
export class AppModule {}
