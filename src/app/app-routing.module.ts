import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameTwoComponent } from './games/game-two/game-two.component';
import { LoginComponent } from './login/login.component';
import { TyperComponent } from './common-components/typer/typer.component';
import { GameOneComponent } from './games/game-one/game-one.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  { path: 'app-typer', component: TyperComponent },
  { path: 'game-two', component: GameTwoComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'game-one', component: GameOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
