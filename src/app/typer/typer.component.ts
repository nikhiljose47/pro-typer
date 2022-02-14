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
  dataSet = [
    'Push yourself, because no one else is going to do it for you.',
    'Failure is the condiment that gives success its flavor.',
    'Wake up with determination. Go to bed with satisfaction.',
    "It's going to be hard, but hard does not mean impossible.",
    'Learning never exhausts the mind.',
    'The only way to do great work is to love what you do.',
  ];

  constructor() {}

  ngOnInit(): void {
    this.data = this.dataSet[0];
    // Character Array element e and index i
    this.data.split("").forEach((e,i)=> {
      let cell = document.getElementById("text");
      let val = document.createElement('span');
      val.setAttribute("id", i.toString());
      val.textContent = e;
      if(cell){
      cell.append(val);
      }
    });
  }

  @HostListener('document:keypress', ['$event'])
  handleInput(event: KeyboardEvent) {
    if(event.key === " " && event.target === document.body) {  
      event.preventDefault();  
    } 
    this.str = event.key;
    let ele = document.getElementById(this.counter.toString());
    if(this.str == ele.textContent){
      console.log(ele.textContent);
     ele.textContent = "D";
     this.counter++;
    }
    console.log(this.str);
  }
}
