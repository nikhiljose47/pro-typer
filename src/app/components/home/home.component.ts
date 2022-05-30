import { Component, OnInit } from '@angular/core';
import { TIMER } from '../../shared-model/constants';
import * as data from "../../data/typer-data.json";
import { TyperUnit } from '../../shared-model/classes';
import { TyperReplayComponent } from '../typer-replay/typer-replay.component';
import { MatDialog } from '@angular/material/dialog';
import { TyperResultComponent } from '../typer-result/typer-result.component';
import { Title, Meta } from '@angular/platform-browser';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typerText: string = "";
  customColor : string;
  typerData: any = (data as any).default;
  isTyping: boolean = false;
  accuracyVal: number = 100;
  rightCount: number = 0;
  charactersTyped: number = 0;
  timer: number = TIMER;
  seconds: string = "Sec";
  timerPercent: number = 0;
  timerLabel: string = TIMER.toString();
  isTyperInitial: boolean = true;
  wpmLabel: string = "0";
  delays: Array<number> = [];
  prevDelay: number = 0;
  startms: number = 0;
  timerlabel: string;
  percentIndicator: number;
  timerFinishIndicator: boolean = false;
 //c-progress-bar
  progressColor: ThemePalette = 'accent';
  progressLabel: number=100;

  //accuracy
  accuracyColor: ThemePalette = 'accent';


  constructor(public dialog: MatDialog,
    private metaTagService: Meta,
    private titleService: Title) { }


  ngOnInit(): void {
    this.titleService.setTitle("Typing Speed Online test in 60 Seconds | Typer-Pro");  
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'Free Online Typing speed test in 60 seconds, Test your speed in WPM, Typing speed game, WPM, Test accuracy of your typing' },  
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'With our free online typing speed test, you can check your Words Per Minute and accuracy in a flash!. Become a fast typer with high accuracy with our typing test and typing games.'},
      { name: 'og:description', content: 'Welcome to the #1 Fun Speed Test! Check your true typing speed, accuracy and skill level in just 60 seconds. Also play games which improves our typing speed'},
      { name:'og:type', content: 'website'},
      { charset: 'UTF-8' }  
    ]); 
    if(localStorage.getItem('typerCounter') == null)
    localStorage.setItem('typerCounter','0');
    this.setTyper(); 
  }

  setTyper(){
    let counter = localStorage.getItem('typerCounter')??'0';
    this.typerText = this.typerData[parseInt(counter)].value;
  }

  changeTyper() {
    let data = localStorage.getItem('typerCounter')??'0';
    let counter = parseInt(data);
    let newCounter = (++counter) % this.typerData.length;
    localStorage.setItem('typerCounter', newCounter.toString());
    this.playAgain()
  }

  timerFinish() {
    this.timerFinishIndicator = true;
    let dialogRef = this.dialog.open(TyperResultComponent, {
      height: '300px',
      width: '600px',
      data:{
        wpm: this.wpmLabel,
        accuracy: this.accuracyVal
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  playAgain() {
    window.location.reload();
  }


  startTimer() {
    this.timer = TIMER;
    let interval = setInterval(() => {
      if (this.timer <= 0) {
        clearInterval(interval);
        this.timerFinish();
        this.isTyping = false;
      }
      if (this.timer > 0) {
        this.progressColor = this.timerPercent>69?'warn':this.timerPercent>49?'primary':'accent';
        this.timer--;
        this.timerPercent = 100 * (TIMER - this.timer) / TIMER;
        this.timerLabel = this.timer.toString();
        this.progressLabel = 100-this.timerPercent;
      }
    }, 1000)
  }

  /* Progress circle timer color change logic */
//   formatTitle = (percent: number) : string => {
//   if(this.timerPercent>=0 && this.timerPercent<=50) {
//     this.timerlabel = this.timer.toString();
//     this.customColor = "#32CD32";
//     return this.timerlabel;
//   }
//   else if(this.timerPercent>50 && this.timerPercent<75)
//   {
//     this.timerlabel = this.timer.toString();
//     this.customColor = "Orange";
//     return this.timerlabel;
//   }
//   else {
//     this.timerlabel = this.timer.toString();
//     this.customColor = "Red";
//     return this.timerlabel;
//   }
// }
  /* Progress circle timer color change logic */
  
  typerFinish(typerUnits: TyperUnit[]) { 
    this.typerData = '';
  }

  typerUpdate(val: boolean) {
    if (this.isTyperInitial) {
      this.startTimer();
      this.isTyperInitial = false;
      this.startms = new Date().getTime();
    }
    this.charactersTyped++;
    if (val) {
      this.delayFinder();
      this.rightCount++;
    }
    this.accuracyUpdate();
  }

  replay() {
    let dialogRef = this.dialog.open(TyperReplayComponent, {
      height: '500px',
      width: '800px',
      data: {
        typerText: this.typerText,
        trailList: this.delays
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeFont(){
    
  }

  delayFinder() {
    if (this.prevDelay != 0) {
      this.delays.push(new Date().getTime() - this.prevDelay);
    }
    this.prevDelay = new Date().getTime();
  }

  accuracyUpdate() {
    this.accuracyVal = (Math.round((this.rightCount / this.charactersTyped) * 100));
    this.accuracyColor = this.accuracyVal<20?'warn':this.accuracyVal<60?'primary':'accent';
  }

  //re-work needed
  wordUpdate() {
    let wpm = parseInt(this.wpmLabel);
    wpm++;
    this.wpmLabel = wpm.toString();
  }
}
