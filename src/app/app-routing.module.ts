import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameTwoComponent } from './components/games/game-two/game-two.component';
import { HomeComponent } from './components/home/home.component';
import { TyperPracticeComponent } from './components/typer-practice/typer-practice.component';
import { GameFourComponent } from './components/games/game-four/game-four.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  { path: 'typing-test', component: HomeComponent },
  { path: 'typing-test-practice', component: TyperPracticeComponent },
  { path: 'typing-game-ghost', component: GameTwoComponent },
  { path: 'typing-game-multiplayer', component: GameFourComponent },
  { path: 'improve-typing-speed', component: CarouselComponent },
  { path: '', redirectTo: '/typing-test', pathMatch: 'full'},
  { path: '404', component: HomeComponent},
  { path: '**', redirectTo: '/404'},
  // { path: '**',}
    // { path: 'game-one', component: GameOneComponent },
  // { path: 'game-three', component: GameThreeComponent },
  // { path: 'signup', component: RegisterComponent },
  // { path: 'app-login', component: LoginComponent },
  // { path: 'leaderboard', component: LeaderboardComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
