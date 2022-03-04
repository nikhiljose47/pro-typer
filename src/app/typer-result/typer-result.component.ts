import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typer-result',
  templateUrl: './typer-result.component.html',
  styleUrls: ['./typer-result.component.scss']
})
export class TyperResultComponent implements OnInit {
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 2000)
  }



}
