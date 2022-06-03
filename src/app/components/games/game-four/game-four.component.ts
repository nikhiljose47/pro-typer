import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { TyperUnit } from 'src/app/shared-model/classes';
import { PlayerDetails } from 'src/app/shared-model/classes';
import { TIMER } from 'src/app/shared-model/constants';
import * as data from 'src/app/data/typer-data.json';
import { TyperResultComponent } from 'src/app/components/typer-result/typer-result.component';
import { DialogBoxComponent } from 'src/app/components/common-components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-game-four',
  templateUrl: './game-four.component.html',
  styleUrls: ['./game-four.component.scss'],
})
export class GameFourComponent implements OnInit {
  typerText: string = '';
  disableForm = true;;
  showTyper: boolean;
  customColor: string;
  playerName: number;
  typerData: any = (data as any).default;
  typerDataCounter: number = 0;
  isTyping: boolean = false;
  accuracyVal: number = 100;
  rightCount: number = 0;
  charactersTyped: number = 0;
  timer: number = TIMER;
  seconds: string = 'Sec';
  timerPercent: number = 0;
  timerLabel: string = TIMER.toString();
  isTyperInitial: boolean = true;
  wpmLabel: string = '0';
  delays: Array<number> = [];
  welcomeAudio: any = new Audio();
  prevDelay: number = 0;
  startms: number = 0;
  playerDetails: PlayerDetails[];
  timerlabel: string;
  percentIndicator: number;
  timerFinishIndicator: boolean;
  isTyperEnabled: boolean = true;
  results: any;
  //game-player
  currentPlayer: number;
  localStorageKey = 'playersList';
  playersTotalList: any = [];

  @ViewChild('playerCount') playerCount:ElementRef;

  constructor(
    public dialog: MatDialog,
    private metaTagService: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    // this.titleService.setTitle("Typing Speed Online test in 60 Seconds | Typer-Pro");
    // this.metaTagService.addTags([
    //   { name: 'keywords', content: 'Free Online Typing speed test in 60 seconds, Test your speed in WPM, Typing speed game, WPM, Test accuracy of your typing' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   { name: 'description', content: 'With our free online typing speed test, you can check your Words Per Minute and accuracy in a flash!. Become a fast typer with high accuracy with our typing test and typing games.'},
    //   { name: 'og:description', content: 'Welcome to the #1 Fun Speed Test! Check your true typing speed, accuracy and skill level in just 60 seconds. Also play games which improves our typing speed'},
    //   { name:'og:type', content: 'website'},
    //   { charset: 'UTF-8' }
    // ]);
    console.log("typerData", this.typerData);
    this.welcomeAudio.src = 'assets/audio/Level_Select.mp3';
    this.welcomeAudio.load();
    this.welcomeAudio.loop = false;
    this.welcomeAudio.play();
    // if (localStorage.getItem('typerCounter') == null) {
    //   localStorage.setItem('typerCounter', '0');
    //   localStorage.setItem('playerCount', '0');
    // }
    //this.isTyperEnabled = true;
    this.setTyper();
    // if (
    //   localStorage.getItem('currentPlayer') <=
    //   localStorage.getItem('playerCount')
    // ) {
    //   this.nextPlayer()
    // } else {
    //   this.showResults();
    // }
  }

  openDialog() {
    this.isTyperEnabled = false;
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      height: '300px',
      width: '600px',
      data: {
        wpm: this.wpmLabel,
        accuracy: this.accuracyVal,
      },
    });

      this.isTyperEnabled = true;
      // localStorage.setItem('typerCounter','1');
  }

  showResults() {
    const results = JSON.parse(localStorage.getItem('playersList'));
  }

  startGame() {

    this.currentPlayer = parseInt(localStorage.getItem('currentPlayer'));
    this.playerName = this.currentPlayer;
  }

  nextPlayer() {
    let cPlayer = parseInt(localStorage.getItem('currentPlayer'));
    cPlayer++;
    localStorage.setItem('currentPlayer', cPlayer.toString());
    window.location.reload();
  }

  setTyper() {
    let counter = localStorage.getItem('typerCounter') ?? '0';
    this.typerText = this.typerData[parseInt(counter)].value;
  }

  changeTyper() {
    let data = localStorage.getItem('typerCounter') ?? '0';
    let counter = parseInt(data);
    let newCounter = ++counter % this.typerData.length;
    localStorage.setItem('typerCounter', newCounter.toString());
    this.playAgain();
  }

  timerFinish() {
    this.timerFinishIndicator = true;
    this.welcomeAudio.pause();
    let dialogRef = this.dialog.open(TyperResultComponent, {
      height: '300px',
      width: '600px',
      data: {
        wpm: this.wpmLabel,
        accuracy: this.accuracyVal,
      },
    });

    const playerDetails = {
      username: parseInt(localStorage.getItem('currentPlayer')),
      wpm: this.wpmLabel,
      accuracy: this.accuracyVal,
    };

    const existingPlayersList = JSON.parse(
      localStorage.getItem(this.localStorageKey)
    );

    if (existingPlayersList && existingPlayersList.length) {
      const indexDeletedItem = existingPlayersList.findIndex(
        (x) => x.username === playerDetails.username
      );

      if (indexDeletedItem === -1) {
        this.playersTotalList = [
          playerDetails,
          ...new Set(existingPlayersList),
        ];
      }
    } else {
      this.playersTotalList.push(playerDetails);
    }

    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.playersTotalList)
    );

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.nextPlayer();
    });
  }

  playAgain() {
    window.location.reload();
  }

  startTimer() {
    this.timer = TIMER;
    let interval = setInterval(() => {
      if (this.timer <= 0) {
        clearInterval(interval);
        this.timerFinish();
        this.isTyping = false;
      }
      if (this.timer > 0) {
        this.timer--;
        this.timerPercent = (100 * (TIMER - this.timer)) / TIMER;
        this.timerLabel = this.timer.toString();
      }
    }, 1000);
  }

  /* Progress circle timer color change logic */
  formatTitle = (percent: number): string => {
    if (this.timerPercent >= 0 && this.timerPercent <= 50) {
      this.timerlabel = this.timer.toString();
      this.customColor = '#32CD32';
      return this.timerlabel;
    } else if (this.timerPercent > 50 && this.timerPercent < 75) {
      this.timerlabel = this.timer.toString();
      this.customColor = 'Orange';
      return this.timerlabel;
    } else {
      this.timerlabel = this.timer.toString();
      this.customColor = 'Red';
      return this.timerlabel;
    }
  };
  /* Progress circle timer color change logic */

  typerFinish(typerUnits: TyperUnit[]) {
    this.typerData = '';
  }

  typerUpdate(val: boolean) {
    if (this.isTyperInitial) {
      this.startTimer();
      this.isTyperInitial = false;
      this.startms = new Date().getTime();
    }
    this.charactersTyped++;
    if (val) {
      this.delayFinder();
      this.rightCount++;
    }
    this.accuracyUpdate();
  }

  delayFinder() {
    if (this.prevDelay != 0) {
      this.delays.push(new Date().getTime() - this.prevDelay);
    }
    this.prevDelay = new Date().getTime();
  }

  accuracyUpdate() {
    this.accuracyVal = Math.round(
      (this.rightCount / this.charactersTyped) * 100
    );
  }

  //re-work needed
  wordUpdate() {
    let wpm = parseInt(this.wpmLabel);
    wpm++;
    this.wpmLabel = wpm.toString();
  }


  onSubmit() {
    this.showTyper = true;
    this.disableForm = false;
    localStorage.setItem('playerCount', this.playerCount.nativeElement.value.toString());
       if (!localStorage.getItem('currentPlayer')) {
      localStorage.setItem('currentPlayer', '1');
    }

 }
 
  ngOnDestroy() {
    this.welcomeAudio.pause();
  }
}
