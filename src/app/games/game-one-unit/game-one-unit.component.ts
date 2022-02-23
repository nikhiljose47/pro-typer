import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameOneUnit, TyperUnit, TyperUnitState } from 'src/app/shared/classes';

@Component({
  selector: 'game-one-unit',
  templateUrl: './game-one-unit.component.html',
  styleUrls: ['./game-one-unit.component.scss']
})
export class GameOneUnitComponent implements OnInit {
  @Input() data: GameOneUnit;
  @Output() result = new EventEmitter<GameOneUnit>();

  typerUnits: TyperUnit[] = [];
  index: number = 0;
  playIndex: number = 0;
  myCurrentScore: number = 0;
  tempWinColor: string = null;

  trackByItems(index: number, item: TyperUnit): number { return item.state; }


  ngOnInit(): void {
    this.createTyper(this.data.text);
  }

  createTyper(data: string) {
    let arr = data.split("");
    for (let i = 0; i < arr.length; i++) {
      let unit = new TyperUnit();
      unit.val = arr[i];
      i == 0 ? unit.state = TyperUnitState.blink : TyperUnitState.undone;
      this.typerUnits.push(unit);
    }
  }

  play() {
    let e = this.data.typerDelays[this.playIndex];
    let intervalId = setInterval(() => {
      this.updateTyper(this.typerUnits[this.playIndex].val);
      this.playIndex++;
      clearInterval(intervalId);
      if (this.playIndex < this.data.typerDelays.length)
        this.play();
    }, e);
  }

  updateTyper(input: string) {
    if (input == this.typerUnits[this.index].val) {
      this.typerUnits[this.index].state = TyperUnitState.done;
      this.index++;
      this.typerUnits[this.index].state = TyperUnitState.blink;
    }
    this.myCurrentScore++;
    if (this.playIndex == this.data.typerDelays.length-1) {
      this.result.emit(this.data);
      this.tempWinColor = "green";
    }
  }
}
