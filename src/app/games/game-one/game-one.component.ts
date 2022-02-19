import { Component, OnInit } from '@angular/core';
import { GameOneUnit, TyperState, TyperUnit } from 'src/app/common-functions/common';
import { GAME_ONE_PLAYER_COUNT } from 'src/app/common-functions/constants';

@Component({
  selector: 'game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.scss']
})
export class GameOneComponent implements OnInit {
  units: GameOneUnit[] = [];
  letterCount: number = 0;

  //hardcode
  letterTime: number[] = [0, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 158, 701, 182, 318, 174, 245, 654, 102, 161, 370, 105, 62, 986, 94, 149, 98, 761, 1931, 175, 555, 183, 148, 246, 80, 923, 176, 257, 335, 94, 206, 158, 141, 694, 78, 144, 883, 61, 161, 811, 231, 140, 182, 199, 228, 111, 149, 1021, 97, 370, 81, 87, 921, 111, 31, 148, 224, 485, 86, 213, 373, 97];

  trackByItems(index: number, item: GameOneUnit): number { return null; }


  ngOnInit(): void {
    this.createUnit();
  }

  createUnit() {
    for (let i = 0; i < GAME_ONE_PLAYER_COUNT; i++) {
      let unit = new GameOneUnit();
      unit.userId = i.toString();
      unit.userName = "mk" + i.toString();
      unit.progressValue = 0;
      let temp = new TyperUnit()
              temp.val= "";
        temp.state= TyperState.undone;
        temp.status= [];
        temp.progressValue= 0;
        unit.typerUnit = [temp];
      this.units.push(unit);
    }
  }

  startGame() {
    //Make common function

  //   let e = this.letterTime[this.letterCount];
  //   let intervalId = setInterval(()=>{
  //     this.units[this.letterCount].state = TyperState.done;
  //     this.units[++this.letterCount].state = TyperState.blink;
  //     this.units[this.letterCount].bgColor = "lightblue";
  //     clearInterval(intervalId);
  //     if(this.letterCount<this.letterTime.length)
  //     this.startGame();
  //   },e);
  }
}