import { Component, OnInit } from '@angular/core';
import { TyperUnit } from '../shared/classes';
import * as data from "../data/typer-data.json";


@Component({
  selector: 'typer-practice',
  templateUrl: './typer-practice.component.html',
  styleUrls: ['./typer-practice.component.scss']
})
export class TyperPracticeComponent implements OnInit {
  typerText: string = "";
  str: string;
  typerLen: number;
  typerData: any = (data as any).default;
  typerDataCounter: number = 0;
  isTyping: boolean = false;
  accuracyVal: number = 100;
  rightCount: number = 0;
  characterTyped: number = 0;
  timerPercent: number= 0;
  isTyperInitial: boolean = true;

  delays: Array<number> = [];
  prevDelay: number = 0;



  ngOnInit(): void {
    this.typerText = this.typerData[this.typerDataCounter].value;
  }

  changeTyper() {
    this.typerDataCounter = (++this.typerDataCounter) % this.typerData.length;
    this.ngOnInit();
  }

  accuracyUpdate() {
    this.accuracyVal = (Math.round((this.rightCount / this.characterTyped) *100) );
  }

  typerFinish(typerUnits: TyperUnit[]) {}

  typerUpdate(val: boolean) {
    if(this.isTyperInitial){
      this.isTyperInitial = false;
    }
    this.characterTyped++;
    if (val) {
      this.rightCount++;
    }
    this.accuracyUpdate();
  }
}
