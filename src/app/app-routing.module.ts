import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameTwoComponent } from './components/games/game-two/game-two.component';
import { LoginComponent } from './components/login/login.component';
import { GameOneComponent } from './components/games/game-one/game-one.component';
import { HomeComponent } from './components/home/home.component';
import { TyperPracticeComponent } from './components/typer-practice/typer-practice.component';
import { RegisterComponent } from './components/register/register.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { GameThreeComponent } from './components/games/game-three/game-three.component';
import { GameFourComponent } from './components/games/game-four/game-four.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'typer-practice', component: TyperPracticeComponent },
  { path: 'game', component: GameTwoComponent },
  { path: 'beat-self', component: GameFourComponent },
  // { path: '**',}
    // { path: 'game-one', component: GameOneComponent },
  // { path: 'game-three', component: GameThreeComponent },
  // { path: 'signup', component: RegisterComponent },
  // { path: 'app-login', component: LoginComponent },
  // { path: 'leaderboard', component: LeaderboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
