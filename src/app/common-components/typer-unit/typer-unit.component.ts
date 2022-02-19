import { Component, Input} from '@angular/core';
import { TyperUnit } from '../../common-functions/common';

@Component({
  selector: 'typer-unit',
  templateUrl: './typer-unit.component.html',
  styleUrls: ['./typer-unit.component.scss']
})
export class TyperUnitComponent  {
  @Input() value: TyperUnit;
}
