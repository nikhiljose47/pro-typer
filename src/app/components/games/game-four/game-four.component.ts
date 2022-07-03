import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Meta, Title } from '@angular/platform-browser';
import { TyperUnit } from 'src/app/shared-model/classes';
import { PlayerDetails } from 'src/app/shared-model/classes';
import { TIMER } from 'src/app/shared-model/constants';
import * as data from 'src/app/data/typer-data.json';
import { TyperResultComponent } from 'src/app/components/typer-result/typer-result.component';
import { DialogBoxComponent } from 'src/app/components/common-components/dialog-box/dialog-box.component';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-four',
  templateUrl: './game-four.component.html',
  styleUrls: ['./game-four.component.scss'],
})
export class GameFourComponent implements OnInit {
  typerText: string = '';
  typerData: any = (data as any).default;
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
  prevDelay: number = 0;
  startms: number = 0;
  isMuted: boolean = true;
  timerlabel: string;
  percentIndicator: number;
  timerFinishIndicator: boolean = false;
  //c-progress-bar
  progressColor: ThemePalette = 'accent';
  progressLabel: number = 100;
  timerInterval: ReturnType<typeof setInterval>;

  //accuracy
  accuracyColor: ThemePalette = 'accent';
  showTyper: boolean = false;
  playerName: number;
  typerDataCounter: number = 0;
  isTyping: boolean = false;
  welcomeAudio: any = new Audio();
  playerDetails: PlayerDetails[];
  isTyperEnabled: boolean = true;
  // show results
  results: any;
  showPlayer: number;
  finalResult: any;
  validInput: boolean = true;
  btnstate: boolean = false;
  showPlayArea = true;
  showDashboard: boolean = false;
  currentPlayer: number;
  localStorageKey = 'playersList';
  playersTotalList: any = [];

  @ViewChild('playerCount') playerCount: ElementRef;

  constructor(
    public dialog: MatDialog,
    private metaTagService: Meta,
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(
      'Free offline multiplayer typing test | Typer Pro'
    );
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'Free Online Typing speed test in 60 seconds, Test your speed in WPM, Typing speed game, WPM, Test accuracy of your typing, Offline multiplayer typing test',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'With the multiplayer game, you can compete with your friends, you can check your Words Per Minute and accuracy in a flash!. The more you compete and practise, the more chances to improve your typing speed.',
      },
      {
        name: 'og:description',
        content:
          'Welcome to the #1 Typing Speed Multiplayer game! Check your true typing speed, accuracy and skill level in just 60 seconds. Also play games which improves our typing speed',
      },
      { name: 'og:type', content: 'website' },
      { charset: 'UTF-8' },
    ]);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce))');
    const details = document.querySelector('.cars > details');

    /* Clearing game data on visiting other routes */
    if (localStorage.getItem('typerCounter')) {
      this.clearLocalStorage();
    }


    if (mediaQuery.matches) {
      details.removeAttribute('open');
    }

    this.welcomeAudio.src = 'assets/audio/Level-Select.mp3';
    this.welcomeAudio.load();
    this.welcomeAudio.loop = false;
    this.btnstate = true;
    this.isTyperEnabled = true;
    this.setTyper();

    if (
      parseInt(localStorage.getItem('currentPlayer')) <=
      parseInt(localStorage.getItem('playerCount'))
    ) {
      this.showTyper = true;
      this.welcomeAudio.pause();
      this.showPlayer = parseInt(localStorage.getItem('currentPlayer'));
      this.setTyper();
    } else {
      this.finalResult = JSON.parse(localStorage.getItem('playersList'));
      if (this.finalResult && this.finalResult.length) {
        this.results = this.finalResult.reverse();
      }
      this.showResults();
      if (localStorage.getItem('currentPlayer')) {
        localStorage.removeItem('currentPlayer');
        localStorage.removeItem('playerCount');
      }
    }
  }

  clearLocalStorage() {
    localStorage.removeItem('playersList');
    localStorage.removeItem('playerCount');
    this.welcomeAudio.pause();
    localStorage.removeItem('typerCounter');
  }

  setTyper() {
    let index = this.getRandomInt(this.typerData.length);
    this.typerText = this.typerData[index].value;
  }

  startGame() {
    this.currentPlayer = parseInt(localStorage.getItem('currentPlayer'));
    this.playerName = this.currentPlayer;
  }

  startTimer() {
    this.timer = TIMER;
    this.timerInterval = setInterval(() => {
      if (this.timer > 1) {
        this.progressColor =
          this.timerPercent > 69
            ? 'warn'
            : this.timerPercent > 49
              ? 'primary'
              : 'accent';
      }
      else {
        clearInterval(this.timerInterval);
        this.timerFinish();
      }
      this.timer--;
      this.timerPercent = (100 * (TIMER - this.timer)) / TIMER;
      this.timerLabel = this.timer.toString();
      this.progressLabel = 100 - this.timerPercent;
    }, 1000);
  }

  openDialog() {
    this.isTyperEnabled = false;
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      height: '370px',
      width: '600px',
      data: {
        wpm: this.wpmLabel,
        accuracy: this.accuracyVal,
      },
    });

    this.isTyperEnabled = true;
    // localStorage.setItem('typerCounter','1');
  }

  nextPlayer() {
    let cPlayer = parseInt(localStorage.getItem('currentPlayer'));
    cPlayer++;
    localStorage.setItem('currentPlayer', cPlayer.toString());
    // this.showPlayArea = false;
    this.reloadComponent();
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  showResults() {
    this.showDashboard = true;
    // this.showPlayArea = false;
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * max);
  }

  timerFinish() {
    this.timerFinishIndicator = true;
    let dialogRef = this.dialog.open(TyperResultComponent, {
      height: '370px',
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
      this.nextPlayer();
    });
  }

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
    this.accuracyColor =
      this.accuracyVal < 20
        ? 'warn'
        : this.accuracyVal < 60
          ? 'primary'
          : 'accent';
  }

  //re-work needed
  wordUpdate() {
    let wpm = parseInt(this.wpmLabel);
    wpm++;
    this.wpmLabel = wpm.toString();
  }

  onSubmit() {
    let pCount = parseInt(this.playerCount.nativeElement.value);
    if (pCount < 9 && pCount > 1) {
      this.showTyper = true;
      this.showDashboard = false;
    }
    localStorage.setItem(
      'playerCount',
      this.playerCount.nativeElement.value.toString()
    );
    if (!localStorage.getItem('currentPlayer')) {
      localStorage.setItem('currentPlayer', '1');
    }
    if (localStorage.getItem('playersList')) {
      localStorage.removeItem('playersList');
    }
    this.welcomeAudio.pause();
  }

  playSound() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.welcomeAudio.pause();
    } else {
      this.welcomeAudio.play();
    }
  }

  ngOnDestroy(): void {
    this.welcomeAudio.pause();
    clearInterval(this.timerInterval);
  }
}
