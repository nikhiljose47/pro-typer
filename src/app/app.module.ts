import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TyperComponent } from './components/common-components/typer/typer.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { TyperUnitComponent } from './components/common-components/typer-unit/typer-unit.component';
import { LoginComponent } from './components/login/login.component';
import { GameTwoComponent } from './components/games/game-two/game-two.component';
import { GameOneComponent } from './components/games/game-one/game-one.component';
import { HomeComponent } from './components/home/home.component';
import { GameOneUnitComponent } from './components/games/game-one-unit/game-one-unit.component';
import { TyperReplayComponent } from './components/typer-replay/typer-replay.component';
import { TyperPracticeComponent } from './components/typer-practice/typer-practice.component';
import { RegisterComponent } from './components/register/register.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameTwoUnitComponent } from './components/games/game-two-unit/game-two-unit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TyperResultComponent } from './components/typer-result/typer-result.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { GameThreeComponent } from './components/games/game-three/game-three.component';
import { GameThreeUnitComponent } from './components/games/game-three-unit/game-three-unit.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { GameFourComponent } from './components/games/game-four/game-four.component';
import { DialogBoxComponent } from './components/common-components/dialog-box/dialog-box.component';

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
    RegisterComponent,
    GameTwoUnitComponent,
    TyperResultComponent,
    GameThreeComponent,
    GameThreeUnitComponent,
    CarouselComponent,
    FooterComponent,
    GameFourComponent,
    DialogBoxComponent,
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ScrollingModule,
    NgCircleProgressModule.forRoot({
      "subtitle": "sec",
      "units": "seconds",
      "responsive": true,
      "lazy": false,
      "titleFontSize": '32px',
      "titleFontWeight": '600',
      "subtitleFontSize": '20px',
      "backgroundGradient": true,
      "backgroundColor": "white",
      "backgroundPadding": 0.5,
      "backgroundGradientStopColor": "rgb(238, 238, 238)",
      "outerStrokeGradient": false,
      "showInnerStroke": false,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
