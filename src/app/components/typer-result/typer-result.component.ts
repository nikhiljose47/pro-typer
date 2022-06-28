import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-typer-result',
  templateUrl: './typer-result.component.html',
  styleUrls: ['./typer-result.component.scss']
})
export class TyperResultComponent implements OnInit {
  showMarks: boolean = false;
  imageName: string = "";
  description: string = "";
  tempDescription: string = "";
  wpmLabel: string = "";
  accuracyLabel: string = "";
  interval: ReturnType<typeof setInterval>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<HomeComponent>) { }

  ngOnInit(): void {
    if (this.data.wpm) {
      this.showMarks = true;
     // this.createResultDesc();
      this.showResult();
    }
  }

  showResult() {
    let totalData = "WPM : " + this.data.wpm + '/' + "ACCURACY : " + this.data.accuracy;
    this.makeAnimated(totalData);
  }

  makeAnimated(data: string): void {
    let text = data.split('');
    let index = 0;
    let id = 1;
    this.interval = setInterval(() => {
      if (text[index] == '/') {
        id++;
        index++;
      }
       if (id == 1) {
        this.wpmLabel += text[index];
      }
      else if (id == 2) {
        this.accuracyLabel += text[index]
      }
      index++;

      if (index > text.length - 1) {
        clearInterval(this.interval);
        this.createResultDesc()
      }
    }, 300);
  }

  createResultDesc(): void {
    let wpm = parseInt(this.data.wpm);
    if (wpm > 60) {
      this.imageName = "result_super";
      this.description = "Ultra!, you are highly productive!";
    }
    else if (wpm > 50) {
      this.imageName = "result_good";
      this.description = "Nice!, you are fast!";
    }
    else if (wpm > 38) {
      this.imageName = "result_good";
      this.description = "Yes!, You are above world average typers!";
    }
    else {
      this.imageName = "result_sad";
      this.description = "Too slow!, you need more practice!";
    }
  }

  onSubmit() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
