import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameTwoUnit, GameTwoUnitState } from '../shared/classes';

@Component({
  selector: 'app-typer-replay',
  templateUrl: './typer-replay.component.html',
  styleUrls: ['./typer-replay.component.scss']
})
export class TyperReplayComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Array<number>) {}
  
  replayData: number[] = [0, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 158, 701, 182, 318, 174, 245, 654, 102, 161, 370, 105, 62, 986, 94, 149, 98, 761, 1931, 175, 555, 183, 148, 246, 80, 923, 176, 257, 335, 94, 206, 158, 141, 694, 78, 144, 883, 61, 161, 811, 231, 140, 182, 199, 228, 111, 149, 1021, 97, 370, 81, 87, 921, 111, 31, 148, 224, 485, 86, 213, 373, 97];
  bestScore: number;
  text = "Jim goes ashore and returns to the stockade, where he is horrified to find only Silver and the pirates. Silver tells Jim that when everyone found the ship was gone, Captain Flint's party had agreed to a truce whereby they take the map and allow the besieged party to leave. In the morning, Livesey arrives to treat the wounded and sick pirates and tells Silver to look out for trouble once he's found the site of the treasure.";
  replayIndex: number = 0;
  hasStartedTyping: boolean = false;
  gameTwoUnits: GameTwoUnit[] = [];
  index: number = 0;

  trackByItems(index: number, item: GameTwoUnit): number { return item.state; }

  ngOnInit(): void {
    this.createTyper(this.text);
    console.log(this.data);
  }

  createTyper(data: string) {
    let arr = data.split("");
    for (let i = 0; i < arr.length; i++) {
      let unit = new GameTwoUnit();
      unit.val = arr[i];
      i == 0 ? unit.state = GameTwoUnitState.blink : GameTwoUnitState.undone;
      this.gameTwoUnits.push(unit);
    }
    if(this.data.length!=0){
    setTimeout(()=>this.startReplay(),2000);
    }
    else{}
  }

  startReplay() {
    let e = this.data[this.replayIndex];
    let intervalId = setInterval(() => {
     this.gameTwoUnits[this.replayIndex].state = GameTwoUnitState.done;
     this.replayIndex++;
     this.gameTwoUnits[this.replayIndex].state = GameTwoUnitState.blink;
      clearInterval(intervalId);
      if (this.replayIndex < this.data.length)
      this.startReplay();
    }, e);
  }
}
