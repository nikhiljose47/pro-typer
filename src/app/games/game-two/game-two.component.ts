import { Component, HostListener, OnInit } from '@angular/core';
import { TyperUnit, TyperState } from '../../common-functions/common';
import { TIMER } from '../../common-functions/constants';
import * as data from "../../data/typer-data.json";


@Component({
  selector: 'game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.scss']
})
export class GameTwoComponent implements OnInit {
  bestScore: number;

  str: string;
  isTyping: boolean = false;
  counter: number = 0;
  timeUp: boolean = false;
  typerLen: number;
  inCorrectCount: number = 0;
  correctCount: number = 0;
  cells: TyperUnit[] = [];
  timeNumber : Map<number, number> = new Map<number, number>();
  typerData: any = (data as any).default;
  typerDataCounter: number = 0;
  letterTime: number[] = [0, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 158, 701, 182, 318, 174, 245, 654, 102, 161, 370, 105, 62, 986, 94, 149, 98, 761, 1931, 175, 555, 183, 148, 246, 80, 923, 176, 257, 335, 94, 206, 158, 141, 694, 78, 144, 883, 61, 161, 811, 231, 140, 182, 199, 228, 111, 149, 1021, 97, 370, 81, 87, 921, 111, 31, 148, 224, 485, 86, 213, 373, 97];
  letterCount: number = 0;
  analyseTime: number[] = [];
  analyseTimeStart: number = 0; 
  trackByItems(index: number, item: TyperUnit): number { return item.state; }

  ngOnInit(): void {
    this.createTyper(this.typerData[this.typerDataCounter].value);
  }

  createTyper(data: string) {
    this.cells = [];
    let arr = data.split("");
    for (let i = 0; i < arr.length; i++) {
      let cell = new TyperUnit();
      cell.val = arr[i];
      i == 0 ? cell.state = TyperState.blink : TyperState.undone;
      this.cells.push(cell);
    }
    this.typerLen = data.length - 1;
  }

  replay() {
    let e = this.letterTime[this.letterCount];
    let intervalId = setInterval(()=>{
      this.cells[this.letterCount].state = TyperState.done;
      this.cells[++this.letterCount].state = TyperState.blink;
      this.cells[this.letterCount].bgColor = "lightblue";
      clearInterval(intervalId);
      if(this.letterCount<this.letterTime.length)
      this.replay();
    },e);
  }

  @HostListener('document:keypress', ['$event'])
  handleInput(event: KeyboardEvent) {
    if (event.key === " " || event.target === document.body) {
      event.preventDefault();
    }
    this.updateTyper(event.key);
  }

  updateTyper(input: string) {
    if (!this.isTyping) {
      this.startTimer();
      this.replay();
    }
    this.isTyping = true;
    if (input == this.cells[this.counter].val) {
      this.cells[this.counter].state = TyperState.done;
      this.counter++;
      this.cells[this.counter].state = TyperState.blink;
      this.cells[this.counter].bgColor = "lightgreen";
      this.correctCount++;

      // this.analyseTime.push(this.analyseTime.length ? (new Date().getTime() - this.analyseTimeStart) : 0)
      // this.analyseTimeStart = new Date().getTime();
    }
    else {
      this.cells[this.counter].status.push(input);
      this.inCorrectCount++;
    }
    this.accuracyUpdate();
  }

  
  timerFinish() {
    let score = 100 * (this.typerLen - this.inCorrectCount) / this.typerLen;
    Math.trunc(score);
    document.getElementById("user1").textContent = score.toString() + "%";
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
        document.getElementById("timer").setAttribute("value", timer.toString());
      }
    }, 1000)
  }


  reset(){}

  changeTyper() {
    this.typerDataCounter = (++this.typerDataCounter) % this.typerData.length;
    this.ngOnInit();
  }

 
  accuracyUpdate() {
    let val = 100 - this.inCorrectCount + this.correctCount / 10;
    document.getElementById("accuracy").setAttribute("value", val.toString());
  }
}
