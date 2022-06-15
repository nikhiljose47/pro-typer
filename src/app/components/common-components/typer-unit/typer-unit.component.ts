import { AfterViewChecked, Component, EventEmitter, Input, Output} from '@angular/core';
import { TyperUnit, TyperUnitState } from '../../../shared-model/classes';

@Component({
  selector: 'typer-unit',
  templateUrl: './typer-unit.component.html',
  styleUrls: ['./typer-unit.component.scss']
})

export class TyperUnitComponent implements AfterViewChecked{
  @Input() value: TyperUnit;
  @Output() blinkerPos = new EventEmitter<number>();

  ngAfterViewChecked(): void {
    if(this.value.state == TyperUnitState.blink)
    {
      setTimeout(()=>
      {
        let viewportOffset = document.getElementById('cell-blink').getBoundingClientRect();
        this.blinkerPos.emit(viewportOffset.left);
    },1) 
    }
  }
}
