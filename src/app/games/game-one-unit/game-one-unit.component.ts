import { Component, Input } from '@angular/core';
import { GameOneUnit } from 'src/app/shared/classes';

@Component({
  selector: 'game-one-unit',
  templateUrl: './game-one-unit.component.html',
  styleUrls: ['./game-one-unit.component.scss']
})
export class GameOneUnitComponent {
@Input() value: GameOneUnit;
}
