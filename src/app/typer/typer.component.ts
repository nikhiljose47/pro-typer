import { Component, HostListener, OnInit } from '@angular/core';
import { Cell, TyperState } from '../common/common';
import * as data from "../data/typer-data.json";


@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.scss'],
})

export class TyperComponent implements OnInit {
  str: string;
  isTyping: boolean = false;
  counter: number = 0;
  interval: any;
  timeUp: boolean = false;
  timerVal: number = 60;
  typerLen: number;
  inCorrectCount: number = 0;
  correctCount: number = 0;
  cells: Cell[] = [];
  accuracyVal : number;
  typerData: any = (data as any).default;
  typerDataCounter: number = 0;
  trackByItems(index: number, item: Cell): number { return item.state; }

  ngOnInit(): void {
    this.createTyper(this.typerData[this.typerDataCounter].value);
  }

  createTyper(data: string) {
    this.cells = [];
    let arr = data.split("");
    for (let i = 0; i < arr.length; i++) {
      let cell = new Cell();
      cell.val = arr[i];
      i == 0 ? cell.state = TyperState.blink : TyperState.undone;
      cell.stateId = cell.state;
      this.cells.push(cell);
    }
    this.typerLen = data.length - 1;
  }

  @HostListener('document:keypress', ['$event'])
  handleInput(event: KeyboardEvent) {
    if (event.key === " " && event.target === document.body) {
      event.preventDefault();
    }
    this.startTimer();
    this.updateTyper(event.key);
  }

  updateTyper(input: string) {
    if (!this.isTyping){
      this.timerVal --;
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
    this.timerVal = 0;
    document.getElementById("user1").textContent = score.toString() + "%";
  }

  startTimer() {
    this.interval = setInterval(() => {
        this.timerVal--;
        if (this.timerVal <= 0) {
          clearInterval(this.interval);
          this.timerFinish();
          this.isTyping = false;
        }
      }, 1000
    );
  }

  accuracyUpdate() {
    this.accuracyVal = 100 - this.inCorrectCount + this.correctCount / 10;
    console.log(this.accuracyVal);
    document.getElementById("accuracy").setAttribute("value", this.accuracyVal.toString());
  }
}

