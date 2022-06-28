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
  nextDesc:string = "";
  accuracyLabel: string = "";
  showEmojiCol: boolean = false;
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
    let totalData = "Your wpm is  " + this.data.wpm + '/' + "& accuracy is " + this.data.accuracy;
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
    }, 200);
  }

  createResultDesc(): void {
    let wpm = parseInt(this.data.wpm);
    if (wpm > 69) {
      this.imageName = "result_king";
      this.description = "King!, you are highly productive!";
      this.nextDesc = "god speed!"
    }
    else if (wpm > 49) {
      this.imageName = "result_super";
      this.description = "Stunning!, you are fast!";
      this.nextDesc = "Next milestone at 70 wpm!"

    }
    else if (wpm > 35) {
      this.imageName = "result_good";
      this.description = "Great!, You have a good speed!";
      this.nextDesc = "Next milestone at 50 wpm!"
    }
    else if (wpm > 19) {
      this.imageName = "result_ok";
      this.description = "Yes!, You have a decent speed!";
      this.nextDesc = "Next milestone at 36 wpm!"
    }
    else {
      this.imageName = "result_sad";
      this.description = "Slow!, you need more practice!";
      this.nextDesc = "Next milestone at 20 wpm!"
    }
    this.showEmojiCol = true;
  }

  onSubmit() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
