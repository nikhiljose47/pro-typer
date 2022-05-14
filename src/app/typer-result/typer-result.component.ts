import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-typer-result',
  templateUrl: './typer-result.component.html',
  styleUrls: ['./typer-result.component.scss']
})
export class TyperResultComponent implements OnInit {
  isLoading: boolean = true;
  showMarks: boolean = false;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data.wpm){
      this.showMarks = true;
      setTimeout(() => this.isLoading = false, 2000)
      
    }
    else{

    }
  }
}
