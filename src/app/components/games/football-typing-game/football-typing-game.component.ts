import { Component, OnInit } from '@angular/core';
import { FootballPlayer, TyperUnit } from 'src/app/shared-model/classes';

 class Ball {
  top: string = "10px";
  left: string = "10px";
}

@Component({
  selector: 'app-football-typing-game',
  templateUrl: './football-typing-game.component.html',
  styleUrls: ['./football-typing-game.component.scss']
})
export class FootballTypingGameComponent implements OnInit {
  footballPlayers: FootballPlayer[]=[];
  intervalId: ReturnType<typeof setTimeout>;
  ball: Ball = new Ball();
  initialPlayerPosTop: number[]=[150, 0, 75, 150, 225, 300,  0, 75, 225, 300, 150];
  initialPlayerPosLeft: number[]=[0, 40, 40, 40, 40,  40, 70, 70, 70, 70, 100]
  homePhrases: string[] = ["Pass it", "take the ball", "hey, look", "c'mon"];
  awayPhrases: string[] = ["attack", "don't let him pass", "take control", "you have to lead"]
  userHasBall: boolean = true;
  //typer
  timerFinishIndicator: boolean = false;
  typerText: string = "";
  
  
  constructor() { }

  trackByItems(index: number, item: FootballPlayer): number {
    return item.id;
  }

  ngOnInit(): void {
    this.generatePlayers();

    this.setBallPos();
    
  }

  setBallPos(): void{
    console.log(this.userHasBall)
    this.intervalId = setInterval(() => {
      let randomId = Math.floor(Math.random() *11);
      randomId += this.userHasBall?11:0;
      console.log(randomId);
      let temp = new Ball;
      temp.left = this.footballPlayers[randomId].leftPos;
      temp.top = this.footballPlayers[randomId].topPos;
      this.ball = temp;
      if(Math.random()<0.4){
        this.makeTyper(this.footballPlayers[randomId].team);
        clearInterval(this.intervalId);
      }
     },2000);
  }

  makeTyper(currentHolder):void {
    let randomIndex = Math.floor(Math.random() *4);
   if(currentHolder){
    this.typerText = this.homePhrases[randomIndex];
    
   }
   else{
    this.typerText = this.awayPhrases[randomIndex];
   }
   
  }

   typerUpdate(val: boolean) {
    if(!val){
      this.userHasBall = !this.userHasBall;
      this.setBallPos();
      this.typerText = "";
    }
   
  }

  generatePlayers(): void {
    let i=0;
  while(i<22){
   let player = new FootballPlayer;
   player.id = i;
   player.name = "P"+i.toString();
   if(i<11){
    player.team = true;
    player.leftPos = (this.initialPlayerPosLeft[i]*8+100).toString()+"px";
    player.topPos = (this.initialPlayerPosTop[i]*2.5).toString()+"px";
   }
   else{
    let j = i-11;
    player.team = false;
    player.leftPos = (this.initialPlayerPosLeft[j]*8+1000).toString()+"px";
    player.topPos = (this.initialPlayerPosTop[j]*2.5).toString()+"px";
   }
   this.footballPlayers.push(player);
   i++; 
  }
}

  playerPosition(): void{
    Math.random
  }

  //typer
  typerFinish(typerUnits: TyperUnit[]) {
    this.typerText = "";

  }

 
  
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
