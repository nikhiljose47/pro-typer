import { Component, OnInit } from '@angular/core';
import { TyperUnit } from '../shared/classes';

@Component({
  selector: 'typer-practice',
  templateUrl: './typer-practice.component.html',
  styleUrls: ['./typer-practice.component.scss']
})
export class TyperPracticeComponent implements OnInit {
  typerText: string = "Everything";
  accuracyVal: number = 100;
  rightCount: number = 0;
  characterTyped: number = 0;

  ngOnInit(): void {
  }

  accuracyUpdate() {
    this.accuracyVal = (Math.round((this.rightCount / this.characterTyped) * 100));
    document.getElementById("accuracy").setAttribute("value", Math.round(this.accuracyVal).toString());
  }

  typerFinish(typerUnits: TyperUnit[]) {

  }

  update(val: boolean) {
    this.characterTyped++;
    if (val) {
      this.rightCount++;
    }
    this.accuracyUpdate();
  }
}
