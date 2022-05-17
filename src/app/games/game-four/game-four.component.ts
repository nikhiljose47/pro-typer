import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { TyperUnit } from 'src/app/shared/classes';
import { TIMER } from 'src/app/shared/constants';
import * as data from 'src/app/data/typer-data.json';
import { TyperResultComponent } from 'src/app/typer-result/typer-result.component';
import { DialogBoxComponent } from 'src/app/common-components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-game-four',
  templateUrl: './game-four.component.html',
  styleUrls: ['./game-four.component.scss']
})
export class GameFourComponent implements OnInit {
  typerText: string = "";
  str: string;
  customColor : string;
  typerLen: number;
  typerData: any = (data as any).default;
  typerDataCounter: number = 0;
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
  timerFinishIndicator: boolean;

  constructor(public dialog: MatDialog,
    private metaTagService: Meta,
    private titleService: Title) { }


  ngOnInit(): void {
    // this.titleService.setTitle("Typing Speed Online test in 60 Seconds | Typer-Pro");  
    // this.metaTagService.addTags([  
    //   { name: 'keywords', content: 'Free Online Typing speed test in 60 seconds, Test your speed in WPM, Typing speed game, WPM, Test accuracy of your typing' },  
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { name: 'description', content: 'With our free online typing speed test, you can check your Words Per Minute and accuracy in a flash!. Become a fast typer with high accuracy with our typing test and typing games.'},
    //   { name: 'og:description', content: 'Welcome to the #1 Fun Speed Test! Check your true typing speed, accuracy and skill level in just 60 seconds. Also play games which improves our typing speed'},
    //   { name:'og:type', content: 'website'},
    //   { charset: 'UTF-8' }  
    // ]); 
    this.openDialog();
    if(localStorage.getItem('typerCounter') == null)
    localStorage.setItem('typerCounter','0');
    this.setTyper(); 
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      height: '300px',
      width: '600px',
      data:{
        wpm: this.wpmLabel,
        accuracy: this.accuracyVal
      }
      
    });
    dialogRef.disableClose = false;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
        this.timer--;
        this.timerPercent = 100 * (TIMER - this.timer) / TIMER;
        this.timerLabel = this.timer.toString();
      }
    }, 1000)
  }

  /* Progress circle timer color change logic */
  formatTitle = (percent: number) : string => {
  if(this.timerPercent>=0 && this.timerPercent<=50) {
    this.timerlabel = this.timer.toString();
    this.customColor = "#32CD32";
    return this.timerlabel;
  }
  else if(this.timerPercent>50 && this.timerPercent<75)
  {
    this.timerlabel = this.timer.toString();
    this.customColor = "Orange";
    return this.timerlabel;
  }
  else {
    this.timerlabel = this.timer.toString();
    this.customColor = "Red";
    return this.timerlabel;
  }
}
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


  delayFinder() {
    if (this.prevDelay != 0) {
      this.delays.push(new Date().getTime() - this.prevDelay);
    }
    this.prevDelay = new Date().getTime();
  }

  accuracyUpdate() {
    this.accuracyVal = (Math.round((this.rightCount / this.charactersTyped) * 100));
  }

  //re-work needed
  wordUpdate() {
    let wpm = parseInt(this.wpmLabel);
    wpm++;
    this.wpmLabel = wpm.toString();
  }
}
