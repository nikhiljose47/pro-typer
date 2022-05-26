import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  constructor(public matDialogRef: MatDialogRef<DialogBoxComponent>) {}

  playerCount : number;


  ngOnInit(): void {
  }

  onClick(){
    this.matDialogRef.close(this.playerCount);
  }

}
