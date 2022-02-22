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
  typerData: any = (data as any).default;
  typerDataCounter: number = 0;
  isTyping: boolean = false;
  accuracyVal: number = 100;
  rightCount: number = 0;
  characterTyped: number = 0;

  ngOnInit(): void {
    this.typerText = this.typerData[this.typerDataCounter].value;
  }

  changeTyper() {
    this.typerDataCounter = (++this.typerDataCounter) % this.typerData.length;
    this.ngOnInit();
  }

  timerFinish() {
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
    this.accuracyVal = (Math.round((this.rightCount / this.characterTyped) *100) );
    document.getElementById("accuracy").setAttribute("value", Math.round(this.accuracyVal).toString());
  }

  typerFinish(typerUnits: TyperUnit[]) {

  }

  update(val: boolean) {
    this.characterTyped++;
    if (val) {
      this.rightCount++;
    }
    this.accuracyUpdate();
  }

  replay(){}
}

