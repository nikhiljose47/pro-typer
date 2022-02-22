import { Component, Input } from '@angular/core';
import { GameTwoUnit } from 'src/app/shared/classes';

@Component({
  selector: 'game-two-unit',
  templateUrl: './game-two-unit.component.html',
  styleUrls: ['./game-two-unit.component.scss']
})
export class GameTwoUnitComponent {
  @Input() value: GameTwoUnit;
}
