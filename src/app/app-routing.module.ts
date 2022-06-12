import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameTwoComponent } from './components/games/game-two/game-two.component';
import { HomeComponent } from './components/home/home.component';
import { TyperPracticeComponent } from './components/typer-practice/typer-practice.component';
import { GameFourComponent } from './components/games/game-four/game-four.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'typer-practice', component: TyperPracticeComponent },
  { path: 'game', component: GameTwoComponent },
  { path: 'multiplayer-game', component: GameFourComponent },
  // { path: '**',}
    // { path: 'game-one', component: GameOneComponent },
  // { path: 'game-three', component: GameThreeComponent },
  // { path: 'signup', component: RegisterComponent },
  // { path: 'app-login', component: LoginComponent },
  // { path: 'leaderboard', component: LeaderboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
