import { Component, OnInit } from '@angular/core';
import { GameOneUnit, TyperUnitState, TyperUnit } from 'src/app/shared/classes';
import { GAME_ONE_PLAYER_COUNT } from 'src/app/shared/constants';

@Component({
  selector: 'game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.scss']
})
export class GameOneComponent implements OnInit {
  typerText: string ="";
  units: GameOneUnit[] = [];
  typerUnits: TyperUnit[] = [];

  //hardcode
  letterTime: number[] = [0, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 158, 701, 182, 318, 174, 245, 654, 102, 161, 370, 105, 62, 986, 94, 149, 98, 761, 1931, 175, 555, 183, 148, 246, 80, 923, 176, 257, 335, 94, 206, 158, 141, 694, 78, 144, 883, 61, 161, 811, 231, 140, 182, 199, 228, 111, 149, 1021, 97, 370, 81, 87, 921, 111, 31, 148, 224, 485, 86, 213, 373, 97];
  text: string = "Not thus time we do";
  trackByItems(index: number, item: GameOneUnit): number { return null; }


  ngOnInit(): void {
    this.createPlayers()
  }

  createPlayers(){
    for(let i=0;i<GAME_ONE_PLAYER_COUNT;i++){
      let unit = new GameOneUnit();
      unit.userId = "";
      unit.userName = "manu"+i.toString();
      unit.progressValue = 50;
      unit.typerUnit = [new TyperUnit()];
     this.units.push(unit);
     }
  }

  startGame() {
    //Make common function

  //   let e = this.letterTime[this.letterCount];
  //   let intervalId = setInterval(()=>{
  //     this.units[this.letterCount].state = TyperUnitState.done;
  //     this.units[++this.letterCount].state = TyperUnitState.blink;
  //     this.units[this.letterCount].bgColor = "lightblue";
  //     clearInterval(intervalId);
  //     if(this.letterCount<this.letterTime.length)
  //     this.startGame();
  //   },e);
  }

  typerFinish(typerUnits: TyperUnit[]) {}

  update(val: boolean) {
    console.log(val);
  }
}