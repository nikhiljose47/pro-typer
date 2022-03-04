import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typer-replay',
  templateUrl: './typer-replay.component.html',
  styleUrls: ['./typer-replay.component.scss']
})
export class TyperReplayComponent implements OnInit {
  ngOnInit(): void {
  }

  // replay() {
  //   let e = this.letterTime[this.letterCount];
  //   let intervalId = setInterval(()=>{
  //     this.cells[this.letterCount].state = TyperUnitState.done;
  //     this.cells[++this.letterCount].state = TyperUnitState.blink;
  //     this.cells[this.letterCount].bgColor = "lightblue";
  //     clearInterval(intervalId);
  //     if(this.letterCount<this.letterTime.length)
  //     this.replay();
  //   },e);

}
