import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'game-three-unit',
  templateUrl: './game-three-unit.component.html',
  styleUrls: ['./game-three-unit.component.scss']
})
export class GameThreeUnitComponent implements OnInit {
  @Input() value: any;

  ngOnInit(): void {
  }

}
