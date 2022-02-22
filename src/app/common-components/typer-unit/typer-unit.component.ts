import { Component, Input} from '@angular/core';
import { TyperUnit } from '../../shared/classes';

@Component({
  selector: 'typer-unit',
  templateUrl: './typer-unit.component.html',
  styleUrls: ['./typer-unit.component.scss']
})
export class TyperUnitComponent  {
  @Input() value: TyperUnit;
}
