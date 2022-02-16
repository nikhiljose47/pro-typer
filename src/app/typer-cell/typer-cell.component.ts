import { Component, Input} from '@angular/core';
import { Cell } from '../common/common';

@Component({
  selector: 'typer-cell',
  templateUrl: './typer-cell.component.html',
  styleUrls: ['./typer-cell.component.scss']
})
export class TyperCellComponent  {
  @Input() value: Cell;
}
