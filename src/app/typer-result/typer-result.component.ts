import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-typer-result',
  templateUrl: './typer-result.component.html',
  styleUrls: ['./typer-result.component.scss']
})
export class TyperResultComponent implements OnInit {
  @Inject(MAT_DIALOG_DATA) public data: boolean;
  isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.isLoading = false, 2000)
  }



}
