import { Component, HostListener, OnInit } from '@angular/core';
import { TIMER } from '../shared/constants';
import * as data from "../data/typer-data.json";
import { TyperUnit } from '../shared/classes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  typerText: string = "";
  str: string;
  typerLen: number;
  inCorrectCount: number = 0;
  correctCount: number = 0;
  typerData: any = (data as any).default;
  typerDataCounter: number = 0;
  isTyping: boolean = false;

  ngOnInit(): void {
    this.typerText = this.typerData[this.typerDataCounter].value;
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

  typerFinish(typerUnits: TyperUnit[]) {

  }

  update(val: boolean) {
    console.log(val);
  }

  replay(){}
}

