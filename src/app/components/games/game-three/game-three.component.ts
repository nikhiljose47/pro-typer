import { Component, HostListener, OnInit } from '@angular/core';
import { GameTwoUnit, GameTwoUnitState, TyperUnitState } from '../../../shared-model/classes';

@Component({
  selector: 'game-two',
  templateUrl: './game-three.component.html',
  styleUrls: ['./game-three.component.scss']
})
export class GameThreeComponent implements OnInit {
  bestScore: number;

  rabbitData: number[] = [900, 940, 970, 431, 922, 952, 975, 885, 993, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 158, 701, 182, 318, 174, 245, 654, 102, 161, 370, 105, 62, 986, 94, 149, 98, 761, 1931, 175, 555, 183, 148, 246, 80, 923, 176, 257, 335, 94, 206, 158, 141, 694, 78, 144, 883, 61, 161, 811, 231, 140, 182, 199, 228, 111, 149, 1021, 97, 370, 81, 87, 921, 111, 31, 148, 224, 485, 86, 213, 373, 97];
  text = "Jim goes ashore and returns to the stockade, where he is horrified to find only Silver and the pirates. Silver tells Jim that when everyone found the ship was gone, Captain Flint's party had agreed to a truce whereby they take the map and allow the besieged party to leave. In the morning, Livesey arrives to treat the wounded and sick pirates and tells Silver to look out for trouble once he's found the site of the treasure.";
  rabbitIndex: number = 0;
  prevrabbitIndex: number = -1;
  hasStartedTyping: boolean = false;
  gameTwoUnits: GameTwoUnit[] = [];
  index: number = 0;
  rabbitStates: boolean[] = [];
  gameTwoStates: GameTwoUnitState[] = [];

  trackByItems(index: number, item: GameTwoUnit): number { return item.state; }

  ngOnInit(): void {
    this.createTyper(this.text);
  }

  reset() { }

  changeTyper() { }

  createTyper(data: string) {
    let arr = data.split("");
    arr.forEach((e, i) => {
      this.rabbitStates.push(false);
      this.gameTwoStates.push(GameTwoUnitState.undone);
    });
    for (let i = 0; i < arr.length; i++) {
      let unit = new GameTwoUnit();
      unit.val = arr[i];
      i == 0 ? unit.state = GameTwoUnitState.blink : GameTwoUnitState.undone;
      this.gameTwoUnits.push(unit);
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleInput(event: KeyboardEvent) {
    if (event.key === " " || event.target === document.body) {
      event.preventDefault();
    }
    this.updateTyper(event.key);
  }

  getrabbitState(index: number): GameTwoUnitState {
    switch (this.gameTwoStates[index]) {
      case GameTwoUnitState.blink: return GameTwoUnitState.gBlink;
      case GameTwoUnitState.done: return GameTwoUnitState.gDone;
      case GameTwoUnitState.undone: return GameTwoUnitState.gUndone;
      default: return GameTwoUnitState.undone;
    }
  }

  setState(index: number) {
    console.log(this.rabbitStates);
    this.gameTwoUnits[index].state = this.rabbitStates[index] ? this.getrabbitState(index) : this.gameTwoStates[index];
  }

  updateTyper(input: string) {
    if(!this.hasStartedTyping){
      this.startrabbit();
    }
    if (input == this.gameTwoUnits[this.index].val) {
      this.gameTwoStates[this.index] = GameTwoUnitState.done;
      this.setState(this.index);
      this.index++;
      this.gameTwoStates[this.index] = GameTwoUnitState.blink;
      this.setState(this.index);
    }
    else {
      this.gameTwoUnits[this.index].status.push(input);
    }
    this.hasStartedTyping = true;
  }

  startrabbit() {
    console.log("came");
    let e = this.rabbitData[this.rabbitIndex];
    let intervalId = setInterval(() => {
      if (this.prevrabbitIndex != -1) {
        this.rabbitStates[this.prevrabbitIndex] = false;
        this.setState(this.prevrabbitIndex);
      }
      this.rabbitStates[this.rabbitIndex] = true;
      this.setState(this.rabbitIndex);
      this.prevrabbitIndex = this.rabbitIndex;
      this.rabbitIndex++;
      clearInterval(intervalId);
      if (this.rabbitIndex < this.rabbitData.length)
      this.startrabbit();
    }, e);
  }
}
