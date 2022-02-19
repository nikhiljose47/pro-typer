import { Component, HostListener, Input, OnInit } from '@angular/core';
import { TyperUnit } from '../../common-functions/common';


@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.scss'],
})

export class TyperComponent{

  @Input() data : TyperUnit[];
  trackByItems(index: number, item: TyperUnit): number { return item.state; }


}