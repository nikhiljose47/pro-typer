import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cell, TyperState } from '../common/common';

@Component({
  selector: 'typer-cell',
  templateUrl: './typer-cell.component.html',
  styleUrls: ['./typer-cell.component.scss']
})
export class TyperCellComponent  {
  @Input() value: Cell;
  @Input() stateId;

}
