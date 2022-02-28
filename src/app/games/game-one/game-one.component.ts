import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { GameOneUnit, TyperUnit } from 'src/app/shared/classes';
import { GAME_ONE_OPPONENT_COUNT } from 'src/app/shared/constants';
import { GameOneUnitComponent } from '../game-one-unit/game-one-unit.component';

@Component({
  selector: 'game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.scss']
})

export class GameOneComponent implements OnInit, AfterViewInit {
  @ViewChildren('childRef') components: QueryList<GameOneUnitComponent>;

  typerText: string = "";
  units: GameOneUnit[] = [];
  typerUnits: TyperUnit[] = [];
  hasGameStarted: boolean = false;
  topScore: number = 0;
  myScore: number = 0;

  //hardcode
  //P1
  letterDelays1: number[] = [0, 840, 50, 331, 822, 152, 275, 685, 193, 953, 90, 312, 246, 117, 197, 142, 92, 21, 148, 158, 501, 182, 318, 174, 245, 454, 102, 161, 370, 55, 62, 986, 94, 149, 98, 761, 1931, 175, 555, 183, 148, 100, 80, 500, 100, 257, 200, 94, 206, 158, 141, 200, 78, 144, 200, 61, 161, 200, 231, 140, 182, 199, 228, 51, 79, 521, 97, 200, 81, 87, 80, 80, 31, 80, 224, 55, 86, 113, 200, 97];

  //P2
  letterDelays2: number[] = [0, 500, 100, 500, 78, 80, 275, 70, 70, 500, 80, 312, 246, 70, 70, 70, 292, 70, 148, 158, 80, 80, 318, 174, 80, 80, 102, 161, 370, 105, 62, 986, 94, 149, 98, 761, 1931, 175, 555, 183, 148, 246, 80, 923, 176, 257, 335, 94, 206, 158, 141, 694, 78, 144, 883, 61, 161, 811, 231, 140, 182, 199, 228, 111, 149, 1021, 97, 370, 81, 87, 921];

  //p3
  letterDelays3: number[] = [0, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 158, 701, 182, 318, 174, 245, 654, 102, 161, 370, 105, 62, 986, 94, 149, 98, 761, 1931, 175, 555, 183, 148, 246, 80, 923, 176, 257, 335, 94, 206, 158, 141, 694, 78, 144, 883, 61, 161, 811, 231, 140, 182, 199, 228, 111, 149, 1021];

  text: string = "Jim goes ashore and returns to the stockade, where he is horrified to find only Silver and the pirates.";

  trackByItems(index: number, item: GameOneUnit): number { return null; }

  ngOnInit(): void {
    this.topScore = this.letterDelays1.length;
    this.createOpponents();
  }

  ngAfterViewInit(): void {}

  createOpponents() {
    for (let i = 0; i < GAME_ONE_OPPONENT_COUNT; i++) {
      let unit = new GameOneUnit();
      unit.userId = "";
      unit.userName = "manu" + i.toString();
      unit.topScore = this.topScore;
      unit.text = this.text;
      if (i == 0)
        unit.typerDelays = this.letterDelays1
      if (i == 1)
        unit.typerDelays = this.letterDelays2
      if (i == 2)
        unit.typerDelays = this.letterDelays3
      this.units.push(unit);
    }
  }

  startGame() {
    this.components.forEach(GameOneUnitComponent => {
      GameOneUnitComponent.play();
    });
  }

  typerFinish(typerUnits: TyperUnit[]) { }

  update(val: boolean) {
    if (!this.hasGameStarted) {
      this.startGame();
      this.hasGameStarted = true;
    }
    if(val){
      this.myScore++;
    }
  }
}