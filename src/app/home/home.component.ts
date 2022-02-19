import { Component, HostListener, OnInit } from '@angular/core';
import { TyperState, TyperUnit } from '../common-functions/common';
import { TIMER } from '../common-functions/constants';
import * as data from "../data/typer-data.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  str: string;
  isTyping: boolean = false;
  counter: number = 0;
  timeUp: boolean = false;
  typerLen: number;
  inCorrectCount: number = 0;
  correctCount: number = 0;
  cells: TyperUnit[] = [];
  typerData: any = (data as any).default;
  typerDataCounter: number = 0;
  trackByItems(index: number, item: TyperUnit): number { return item.state; }
  constructor() { }


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
    }
    this.isTyping = true;
    if (input == this.cells[this.counter].val) {
      this.cells[this.counter].state = TyperState.done;
      this.counter++;
      this.cells[this.counter].state = TyperState.blink;
      this.correctCount++;
    }
    else {
      this.cells[this.counter].status.push(input);
      this.inCorrectCount++;
    }
    this.accuracyUpdate();
  }

  changeTyper() {
    this.typerDataCounter = (++this.typerDataCounter) % this.typerData.length;
    this.ngOnInit();
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

  accuracyUpdate() {
    let val = 100 - this.inCorrectCount + this.correctCount / 10;
    document.getElementById("accuracy").setAttribute("value", val.toString());
  }
}

