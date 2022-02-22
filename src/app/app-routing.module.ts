import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameTwoComponent } from './games/game-two/game-two.component';
import { LoginComponent } from './login/login.component';
import { GameOneComponent } from './games/game-one/game-one.component';
import { HomeComponent } from './home/home.component';
import { TyperPracticeComponent } from './typer-practice/typer-practice.component';
import { RegisterComponent } from './register/register.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'typer-practice', component: TyperPracticeComponent },
  { path: 'game-two', component: GameTwoComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'game-one', component: GameOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
