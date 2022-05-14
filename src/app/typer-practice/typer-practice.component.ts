import { Component, OnInit } from '@angular/core';
import { TyperUnit } from '../shared/classes';
import * as data from "../data/typer-data.json";
import {Title, Meta} from '@angular/platform-browser';

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

constructor(private titleService: Title,
  private metaTagService: Meta) {

}

  ngOnInit(): void {
    this.typerText = this.typerData[this.typerDataCounter].value;

    this.titleService.setTitle("Practice Page of Typer Pro");  
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'Typing speed game, Practice speed typing, Improve typing accuracy' },  
      { name: 'robots', content: 'index, follow' },  
      { name: 'viewport', content: 'width=device-width'},
      { name: 'description', content: 'Typer Pro introduces Practice game, where you can find the accuracy of your typing and improve it along with typing speed. Become a fast typer with high accuracy.'},
      { name: 'og:description', content: 'Welcome to Typer Pro! Check your true typing speed, accuracy and skill level in just 60 seconds. Also play games which improves our typing speed. Choose Easy, Medium, Hard or Difficult modes as u wish.'},
      { name:'og:type', content: 'website'},
      { charset: 'UTF-8' }  
    ]); 
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
