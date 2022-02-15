import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.scss'],
})


export class TyperComponent implements OnInit {
  str: string;
  data: string;
  counter: number = 0;
  interval: any;
  timeUp: boolean = false;
  TIMER: number = 10;
  typerLen : number;
  inCorrectCount: number = 0;
  correctCount: number = 0;
  totalTyped: number = 0;
  dataSet = [
    'Push yourself, because no one else is going to do it for you.',
    'Failure is the condiment that gives success its flavor.',
    'Wake up with determination. Go to bed with satisfaction.',
    "It's going to be hard, but hard does not mean impossible.",
    'Learning never exhausts the mind.',
    'The only way to do great work is to love what you do.',
  ];

  constructor() { }

  ngOnInit(): void {
    this.data = this.dataSet[0];
    // Character Array element e and index i
    this.data.split("").forEach((e, i) => {
      let cell = document.getElementById("text");
      let val = document.createElement('span');
      val.setAttribute("id", i.toString());
      val.textContent = e;
      if (cell) {
        cell.append(val);
      }
    });
    this.typerLen = this.data.length-1;
  }

  @HostListener('document:keypress', ['$event'])
  handleInput(event: KeyboardEvent) {
    if (event.key === " " && event.target === document.body) {
      event.preventDefault();
    }
    this.calculateWM(event.key);
  }

  calculateWM(input:string){
    console.log(this.str);
    this.totalTyped
    this.str = input;
    let ele = document.getElementById(this.counter.toString());
    if (this.str == ele.textContent) {
      ele.textContent = " ";
      this.counter++;
      this.correctCount++;
    }
    else{
      this.inCorrectCount++; 
    }
    this.accuracyUI();
  }

  timer() {
    this.startTimer();
  }

  timerFinish(){
    let score = 100*(this.typerLen-this.inCorrectCount)/this.typerLen;
    score.toPrecision(1);
    document.getElementById("user1").textContent = score.toString()+"%";
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.TIMER <= 0) {
        clearInterval(this.interval);
        this.timerFinish();
      }
      if (this.TIMER > 0) {
        this.TIMER--;
        let ele = document.getElementById("timer");
        if (ele.innerText) {
          let val = parseInt(ele.innerText);
          val--;
          ele.innerText = val.toString();
        }
      } else {
        this.TIMER = 10;
      }
    }, 1000)
  }

 accuracyUI(){
   let val = 100 - this.inCorrectCount + this.correctCount/10;
   console.log(val);
   document.getElementById("accuracy").setAttribute("value",val.toString()); 
 }
  
}

