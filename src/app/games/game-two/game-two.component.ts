import { Component, OnInit } from '@angular/core';
import { TyperUnit } from '../../shared/classes';

@Component({
  selector: 'game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.scss']
})
export class GameTwoComponent implements OnInit {
  bestScore: number;

  letterTime: number[] = [0, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 158, 701, 182, 318, 174, 245, 654, 102, 161, 370, 105, 62, 986, 94, 149, 98, 761, 1931, 175, 555, 183, 148, 246, 80, 923, 176, 257, 335, 94, 206, 158, 141, 694, 78, 144, 883, 61, 161, 811, 231, 140, 182, 199, 228, 111, 149, 1021, 97, 370, 81, 87, 921, 111, 31, 148, 224, 485, 86, 213, 373, 97];
  text = "Hi, I am Tony and you are pony";

  ngOnInit(): void {}

  reset(){}

  changeTyper() {
  }
  
  typerFinish(typerUnits: TyperUnit[]) {}

  update(val: boolean) {
    console.log(val);
  }
}
