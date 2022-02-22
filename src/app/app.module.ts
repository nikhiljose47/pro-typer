import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TyperComponent } from './common-components/typer/typer.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TyperUnitComponent } from './common-components/typer-unit/typer-unit.component';
import { LoginComponent } from './login/login.component';
import { GameTwoComponent } from './games/game-two/game-two.component';
import { GameOneComponent } from './games/game-one/game-one.component';
import { HomeComponent } from './home/home.component';
import { GameOneUnitComponent } from './games/game-one-unit/game-one-unit.component';
import { TyperReplayComponent } from './typer-replay/typer-replay.component';
import { TyperPracticeComponent } from './typer-practice/typer-practice.component';

import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TyperComponent,
    LeaderboardComponent,
    TyperUnitComponent,
    LoginComponent,
    GameTwoComponent,
    GameOneComponent,
    HomeComponent,
    GameOneUnitComponent,
    TyperReplayComponent,
    TyperPracticeComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
