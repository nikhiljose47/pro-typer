import { Component, HostListener, OnInit } from '@angular/core';
import { GameTwoUnit, GameTwoUnitState } from '../../shared/classes';

@Component({
  selector: 'game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.scss']
})
export class GameTwoComponent implements OnInit {
  bestScore: number;
  difficultLevel: number[] = [0, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107,
    219, 91, 111, 53, 324, 692, 114, 207, 664, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 
   234, 185, 88, 148, 219, 91, 111, 705, 53, 324, 692, 114, 207, 664, 145, 865,  143, 234, 185, 88, 148, 107, 219, 91, 111, 8, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 53, 324, 692, 114, 207, 664, 145, 865, 143, 
   234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 
   91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 143, 234, 185, 88, 148, 107, 219, 91, 111, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 119, 526, 137, 119, 526, 137, 239, 131, 184, 491, 77, 121, 278, 79, 47, 740, 71, 112, 74, 571, 1449, 132, 417, 138, 111, 185, 60, 693, 132, 193, 252, 71, 155, 119, 
   106, 521, 59, 663, 46, 121, 609, 174, 105, 137, 150, 171, 84, 112, 766, 73, 278, 61, 66, 691, 84, 24, 111, 168, 364, 65, 160, 280, 73];
 
   mediumLevel: number[]=[ 0, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148,
    60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148,
    940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148,
    60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148,
    940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 10, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148,
    60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148,
    60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148,
    60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148,
    158, 701, 182, 158, 701, 182, 318, 174, 245, 654, 102, 161, 370, 105, 62, 986, 94, 149, 98, 761, 1931, 175, 555, 183, 148, 246, 80, 923, 176, 257, 335, 94, 206, 158, 141, 694, 78, 144, 883, 61, 161, 811, 231, 140, 182, 199, 228, 111, 149, 1021, 97, 370, 81, 87, 921, 111, 31, 148, 224, 485, 86, 213, 373, 97];
  easyLevel: number[];

  ghostData: number[];
  text = "Jim goes ashore and returns to the stockade, where he is horrified to find only Silver and the pirates. Silver tells Jim that when everyone found the ship was gone, Captain Flint's party had agreed to a truce whereby they take the map and allow the besieged party to leave. In the morning, Livesey arrives to treat the wounded and sick pirates and tells Silver to look out for trouble once he's found the site of the treasure.";
  ghostIndex: number = 0;
  prevGhostIndex: number = -1;
  hasStartedTyping: boolean = false;
  gameTwoUnits: GameTwoUnit[] = [];
  index: number = 0;
  ghostStates: boolean[] = [];
  gameTwoStates: GameTwoUnitState[] = [];

  trackByItems(index: number, item: GameTwoUnit): number { return item.state; }

  ngOnInit(): void {
    this.createTyper(this.text);
    this.ghostData = this.difficultLevel;
  }

  reset() { }

  changeTyper() { }

  createTyper(data: string) {
    let arr = data.split("");
    arr.forEach((e, i) => {
      this.ghostStates.push(false);
      this.gameTwoStates.push(GameTwoUnitState.undone);
    });
    for (let i = 0; i < arr.length; i++) {
      let unit = new GameTwoUnit();
      unit.val = arr[i];
      unit.state = GameTwoUnitState.undone;
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

  getGhostState(index: number): GameTwoUnitState {
    switch (this.gameTwoStates[index]) {
      case GameTwoUnitState.blink: return GameTwoUnitState.gBlink;
      case GameTwoUnitState.done: return GameTwoUnitState.gDone;
      case GameTwoUnitState.undone: return GameTwoUnitState.gUndone;
      default: return GameTwoUnitState.undone;
    }
  }

  setState(index: number) {
    // console.log(this.ghostStates);
    this.gameTwoUnits[index].state = this.ghostStates[index] ? this.getGhostState(index) : this.gameTwoStates[index];
  }

  updateTyper(input: string) {
    if (!this.hasStartedTyping) {
      this.startGhost();
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

  startGhost() {
    let e = this.ghostData[this.ghostIndex];
    let intervalId = setInterval(() => {
      if (this.prevGhostIndex != -1) {
        this.ghostStates[this.prevGhostIndex] = false;
        this.setState(this.prevGhostIndex);
      }
      this.ghostStates[this.ghostIndex] = true;
      this.setState(this.ghostIndex);
      this.prevGhostIndex = this.ghostIndex;
      this.ghostIndex++;
      clearInterval(intervalId);
      if (this.ghostIndex < this.ghostData.length)
        this.startGhost();
    }, e);
  }
}
