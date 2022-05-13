import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { TyperUnitState, TyperUnit } from '../../shared/classes';


@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TyperComponent implements OnInit {
  @Input() data: string;
  @Output() result = new EventEmitter<TyperUnit[]>();
  @Output() updateVal = new EventEmitter<boolean>();
  @Output() wordUpdate = new EventEmitter<void>();
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;


  index: number = 0;
  hasFinished: boolean = false;
  initialLeftOffset: number = 0.0;
  leftOffset: number = 0.0;
  isInitialOffsetVal: boolean = true;
  offsetSum: number = 0;

  trackByItems(index: number, item: TyperUnit): number { return item.state; }

  typerUnits: TyperUnit[] = [];

  ngOnInit(): void {
    this.createTyper(this.data);
  }

  getLeftOffset(value) {
    this.leftOffset = value;
    this.initialOffsetCalc();
  }

  initialOffsetCalc() {
    if (this.isInitialOffsetVal) {
      this.isInitialOffsetVal = false;
      this.initialLeftOffset = this.leftOffset;
    }
  }

  createTyper(data: string) {
    let arr = data.split("");
    for (let i = 0; i < arr.length; i++) {
      let unit = new TyperUnit();
      unit.val = arr[i];
      i == 0 ? unit.state = TyperUnitState.blink : TyperUnitState.undone;
      this.typerUnits.push(unit);
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleInput(event: KeyboardEvent) {
    if (!this.hasFinished) {
      if (event.key === " " || event.target === document.body) {
        event.preventDefault();
      }
      this.updateTyper(event.key);
      if (this.typerUnits.length - 1 == this.index) {
        this.hasFinished = true;
      }
    }
  }

  updateTyper(input: string) {
    if (input == this.typerUnits[this.index].val) {
      this.typerUnits[this.index].state = TyperUnitState.done;
      this.index++;
      this.typerUnits[this.index].state = TyperUnitState.blink;
      if (this.index % 5 == 0) {
        this.wordUpdate.emit();
      }
      this.updateVal.emit(true);
      // console.log("inital", this.initialLeftOffset)
      // console.log("left", this.leftOffset)
      //  console.log("diff",this.leftOffset - this.initialLeftOffset)
      if ((this.leftOffset - this.initialLeftOffset) > 0) {
        this.offsetSum += this.leftOffset - this.initialLeftOffset;
        this.viewport.scrollTo({ start: (this.offsetSum) });
      }
    }
    else {
      this.typerUnits[this.index].status.push(input);
      this.updateVal.emit(false);
    }
    if (this.hasFinished) {
      this.result.emit(this.typerUnits);
    }
  }
}