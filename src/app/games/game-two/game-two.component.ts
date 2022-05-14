import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { TyperResultComponent } from 'src/app/typer-result/typer-result.component';
import { GameTwoUnit, GameTwoUnitState } from '../../shared/classes';

@Component({
  selector: 'game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.scss']
})
export class GameTwoComponent implements OnInit {
  bestScore: number;
  hardLevel: number[] = [0, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 53, 324, 692, 114, 207, 664, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143,
    234, 185, 88, 148, 219, 91, 111, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 8, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 53, 324, 692, 114, 207, 664, 145, 865, 143,
    234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219,
    91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 143, 234, 185, 88, 148, 107, 219, 91, 111, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 45, 705, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 53, 324, 692, 114, 207, 664, 145, 865, 143, 234, 185, 88, 148, 107, 219, 91, 111, 119, 526, 137, 119, 526, 137, 239, 131, 184, 491, 77, 121, 278, 79, 47, 740, 71, 112, 74, 571, 1449, 132, 417, 138, 111, 185, 60, 693, 132, 193, 252, 71, 155, 119,
    106, 521, 59, 663, 46, 121, 609, 174, 105, 137, 150, 171, 182, 318, 174, 245, 84, 112, 766, 73, 278, 61, 66, 691, 84, 24, 111, 168, 364, 65, 160, 280, 73];
  mediumLevel: number[] = [0, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 10, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 60, 940, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 70, 431, 922, 152, 275, 885, 193, 1153, 190, 312, 246, 117, 197, 142, 292, 121, 148, 158, 701, 182, 158, 701, 182, 318, 174, 245, 654, 102, 161, 370, 105, 62, 986, 94, 149, 98, 761, 1931, 175, 555, 183, 148, 246, 80, 923, 176, 257, 335, 94, 206, 158, 141, 694, 78, 144, 883, 61, 161, 811, 231, 140, 182, 199, 228, 111, 149, 1021, 97, 370, 81, 87, 921, 111, 31, 148, 224, 485, 86, 213, 373, 97];
  easyLevel: number[] = [0, 400, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 460, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 460, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 460, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 460, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 460, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 410, 460, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 460, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 460, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 460, 1340, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 470, 831, 1322, 552, 675, 1285, 593, 1553, 590, 712, 646, 517, 597, 542, 692, 521, 548, 558, 1101, 582, 558, 1101, 582, 718, 574, 645, 1054, 502, 561, 770, 505, 462, 1386, 494, 549, 498, 1161, 2331, 575, 955, 583, 548, 646, 480, 1323, 576, 657, 735, 494, 606, 558, 541, 1094, 478, 544, 1283, 461, 561, 1211, 631, 540, 582, 599, 628, 511, 549, 1421, 497, 770, 481, 487, 1321, 511, 431, 548, 624, 885, 486, 613, 773, 497];
  extremeLevel: number[] = [0, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 36, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 36, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 36, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 36, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 36, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 6, 36, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 36, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 36, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 36, 564, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 42, 259, 554, 92, 165, 531, 116, 692, 114, 188, 148, 71, 119, 86, 176, 73, 89, 95, 421, 110, 95, 421, 110, 191, 105, 147, 393, 62, 97, 222, 63, 38, 592, 57, 90, 59, 457, 1159, 105, 333, 110, 89, 148, 48, 554, 106, 155, 201, 57, 124, 95, 85, 417, 47, 87, 530, 37, 97, 487, 139, 84, 110, 120, 137, 67, 90, 613, 59, 222, 49, 53, 553, 67, 19, 89, 135, 291, 52, 128, 224, 59];
  ghostData: number[];
  text = "Jim goes ashore and returns to the stockade, where he is horrified to find only Silver and the pirates. Silver tells Jim that when everyone found the ship was gone, Captain Flint's party had agreed to a truce whereby they take the map and allow the besieged party to leave. In the morning, Livesey arrives to treat the wounded and sick pirates and tells Silver to look out for trouble once he's found the site of the treasure.";
  //text="Jim goes ashore"; 
  ghostIndex: number = 0;
  prevGhostIndex: number = -1;
  hasStartedTyping: boolean = false;
  gameTwoUnits: GameTwoUnit[] = [];
  index: number = 0;
  ghostStates: boolean[] = [];
  gameTwoStates: GameTwoUnitState[] = [];
  hasFinished: boolean = false;
  winner: String = "";
  oncePlayed: boolean = false;
  easyGameEnabled: boolean = true;
  mediumGameEnabled: boolean = true;
  hardGameEnabled: boolean = true;
  extremeGameEnabled: boolean = true;
  //for restart
  ghostIntervalId: ReturnType<typeof setTimeout>;

  //for audio
  ghostBgAudio: any = new Audio();

  constructor(public dialog: MatDialog,
    private titleService: Title,
    private metaTagService: Meta
    ) { }

  trackByItems(index: number, item: GameTwoUnit): number { return item.state; }

  ngOnInit(): void {
    this.createTyper(this.text);
    this.ghostData = this.easyLevel;


    this.titleService.setTitle("Typing Speed Test: Beat the ghost | Typer PRO");  
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'Typing speed game, Online Free Typing Test, Typer Pro, Take free typing test online, Typing online test, Ghost game typing, Beat the typing ghost, Typing speed test, Easy typing test, Medium typing test, Hard typing test , Extreme typing testTyping speed game, Online Typing, Typing online test, Easy typing test, Medium typing test, Hard typing test , Extreme typing test' },  
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { name: 'description', content: 'Begin typing to start the online typing game free, here you can compete with a ghost in 4 different levels of typing test. Have fun as well as improve typing speed. Test your speed in 4 difficulty levels : Easy, Medium, Hard and Extreme tests.' },
      { name: 'og:description', content: 'Welcome to the #1 Fun Online Typing Speed Test! Check your true typing speed, accuracy and skill level here at Typer Pro. Also play games or take typing test which improves your typing speed'},
      { name:'og:type', content: 'website'},
      { charset: 'UTF-8' }  
    ]); 

  //   this.ghostData = [0,50,1000, 1000,1050,1000, 100,50,10, 0,550,10, 0,550,]
    this.ghostBgAudio.src = "assets/audio/ghost_bg.mp3";
    this.ghostBgAudio.load();
    this.ghostBgAudio.loop = true;
  }

  reset() { }

  changeTyper() { }


  setDifficulty(name: string) {
    let k = document.getElementsByClassName('btnGroup-unit');
    for (let i = 0; i < k.length; i++) {
      let item = k[i].classList;
      console.log(item.value)
      if (item.contains("active1")) {
        item.remove("active1");
      }
      document.getElementById(name).classList.add("active1");
    }

    switch (name) {
      case 'easy-btn': this.ghostData = this.easyLevel;
        break;
      case 'medium-btn': this.ghostData = this.mediumLevel;
        break;
      case 'hard-btn': this.ghostData = this.hardLevel;
        break;
      case 'extreme-btn': this.ghostData = this.extremeLevel;
        break;
    }
  }

  createTyper(data: string) {
    this.ghostStates=[];
    this.gameTwoStates = [];
    this.gameTwoUnits = [];
    let arr = data.split("");
    arr.forEach((e, i) => {
      this.ghostStates.push(false);
      this.gameTwoStates.push(GameTwoUnitState.undone);
    });
    for (let i = 0; i < arr.length; i++) {
      let unit = new GameTwoUnit();
      unit.val = arr[i];
      unit.state = GameTwoUnitState.undone;
      this.gameTwoUnits.push(unit);
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleInput(event: KeyboardEvent) {
    if (event.key === " " || event.target === document.body) {
      event.preventDefault();
    }
    this.updateTyper(event.key);
  }

  getGhostState(index: number): GameTwoUnitState {
    switch (this.gameTwoStates[index]) {
      case GameTwoUnitState.blink: return GameTwoUnitState.gBlink;
      case GameTwoUnitState.done: return GameTwoUnitState.gDone;
      case GameTwoUnitState.undone: return GameTwoUnitState.gUndone;
      default: return GameTwoUnitState.undone;
    }
  }

  onGameFinish(winner) {
     this.ghostBgAudio.pause();
    if (winner == "player") {
      let dialogRef = this.dialog.open(TyperResultComponent, {
        data: {
          compWin: false
        },
      });
    }
    else {
      let dialogRef = this.dialog.open(TyperResultComponent, {
        data: {
          compWin: true
        },
      });
    }
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "assets/ghost-alert.mp3";
    audio.load();
    audio.play();
  }

  setState(index: number) {
    // console.log(this.ghostStates);
    if (this.ghostIndex > this.index) {
      if (!this.oncePlayed) {
        this.oncePlayed = true;
        this.playAudio();
        this.ghostBgAudio.play();
      }        
    }
    if (this.ghostIndex < this.index) {
      this.oncePlayed = false;
      this.ghostBgAudio.pause();

    }
    this.gameTwoUnits[index].state = this.ghostStates[index] ? this.getGhostState(index) : this.gameTwoStates[index];
  }

  updateTyper(input: string) {
    if (!this.hasStartedTyping) {
      this.startGhost();
    }
    if (input == this.gameTwoUnits[this.index].val) {
      this.gameTwoStates[this.index] = GameTwoUnitState.done;
      this.setState(this.index);
      this.index++;
      this.gameTwoStates[this.index] = GameTwoUnitState.blink;
      this.setState(this.index);
      if (this.index == this.gameTwoUnits.length) {
        if (!this.hasFinished) {
          this.hasFinished = true;
          this.onGameFinish("player");
        }
      }
    }
    else {
      this.gameTwoUnits[this.index].status.push(input);
    }
    this.hasStartedTyping = true;
  }

  startGhost() {
    let e = this.ghostData[this.ghostIndex];
    this.ghostIntervalId = setInterval(() => {
      if (this.prevGhostIndex != -1) {
        this.ghostStates[this.prevGhostIndex] = false;
        this.setState(this.prevGhostIndex);
      }
      this.ghostStates[this.ghostIndex] = true;
      this.setState(this.ghostIndex);
      this.prevGhostIndex = this.ghostIndex;
      this.ghostIndex++;
      clearInterval(this.ghostIntervalId);
      if (this.ghostIndex < this.ghostData.length)
        this.startGhost();
      else {
        if (!this.hasFinished) {
          this.hasFinished = true;
          this.onGameFinish("computer");
        }
        //FINISH ALL
      }
    }, e);
  }

  abort() {
    clearInterval(this.ghostIntervalId);
    this.createTyper(this.text);
    this.hasStartedTyping = false;
    this.ghostIndex = 0;
    this.prevGhostIndex = -1;
    this.index=0;
    this.ghostBgAudio.pause();
  }
}
