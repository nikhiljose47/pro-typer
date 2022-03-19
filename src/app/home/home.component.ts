import { Component, HostListener, OnInit } from '@angular/core';
import { TIMER } from '../shared/constants';
import * as data from "../data/typer-data.json";
import { TyperUnit } from '../shared/classes';
import { TyperReplayComponent } from '../typer-replay/typer-replay.component';
import { MatDialog } from '@angular/material/dialog';
import { TyperResultComponent } from '../typer-result/typer-result.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typerText: string = "";
  str: string;
  typerLen: number;
  typerData: any = (data as any).default;
  typerDataCounter: number = 0;
  isTyping: boolean = false;
  accuracyVal: number = 100;
  rightCount: number = 0;
  charactersTyped: number = 0;
  timerPercent: number = 0;
  timerLabel: string = TIMER.toString();
  isTyperInitial: boolean = true;
  wpmLabel: string = "0";

  delays: Array<number> = [];
  prevDelay: number = 0;

  startms: number = 0;

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
    this.typerText = this.typerData[this.typerDataCounter].value;
  }

  changeTyper() {
    this.typerDataCounter = (++this.typerDataCounter) % this.typerData.length;
    this.ngOnInit();
  }

  timerFinish() {
    let dialogRef = this.dialog.open(TyperResultComponent, {
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  startTimer() {
    let timer = TIMER;
    let interval = setInterval(() => {
      if (timer <= 0) {
        clearInterval(interval);
        this.timerFinish();
        this.isTyping = false;
      }
      if (timer > 0) {
        timer--;
        this.timerPercent = 100 * (TIMER - timer) / TIMER;
        this.timerLabel = timer.toString();
      }
    }, 1000)
  }

  typerFinish(typerUnits: TyperUnit[]) { }

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
      data: this.delays
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
  }

  //re-work needed
  wordUpdate() {
    let minute = (new Date().getTime() - this.startms)/60000;
    console.log(minute);  
    let wpm = this.charactersTyped / (5 * minute);
    wpm = Math.floor(wpm);
    console.log(wpm);
    this.wpmLabel = wpm.toString();
  }
}

