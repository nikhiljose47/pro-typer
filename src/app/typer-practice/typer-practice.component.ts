import { Component, OnInit } from '@angular/core';
import { TyperUnit } from '../shared/classes';

@Component({
  selector: 'typer-practice',
  templateUrl: './typer-practice.component.html',
  styleUrls: ['./typer-practice.component.scss']
})
export class TyperPracticeComponent implements OnInit {
  typerText: string = "Everything";

  ngOnInit(): void {
  }
  
  typerFinish(typerUnits: TyperUnit[]) {

  }

  update(val: boolean) {
    console.log(val);
  }
}
