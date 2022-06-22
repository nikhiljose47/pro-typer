import { Component, OnInit } from '@angular/core';
import { TIMER } from '../../shared-model/constants';
import * as data from '../../data/typer-data.json';
import { TyperUnit } from '../../shared-model/classes';
import { TyperReplayComponent } from '../typer-replay/typer-replay.component';
import { MatDialog } from '@angular/material/dialog';
import { TyperResultComponent } from '../typer-result/typer-result.component';
import { Title, Meta } from '@angular/platform-browser';
import { ThemePalette } from '@angular/material/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  typerText: string = '';
  typerData: any = (data as any).default;
  hasGameBegun: boolean = false;
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
  timerlabel: string;
  percentIndicator: number;
  timerFinishIndicator: boolean = false;
  //c-progress-bar
  progressColor: ThemePalette = 'accent';
  progressLabel: number = 100;

  //accuracy
  accuracyColor: ThemePalette = 'accent';
  timerInterval: ReturnType<typeof setInterval>;
  isMobileDevice : boolean = false;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrWidth = window.innerWidth;
    const x = this.scrWidth;
   if(this.scrWidth> 320 && this.scrWidth<=539) {
    this.isMobileDevice = true;
   }
    console.log(this.scrWidth);
}

  constructor(
    public dialog: MatDialog,
    private metaTagService: Meta,
    private titleService: Title,
    
  ) {
    console.log("constructor");
  }

  ngOnInit(): void {
    this.titleService.setTitle(
      'Typing Speed Online test in 60 Seconds | Typer Pro'
    );
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'Free Online Typing speed test in 60 seconds, Test your speed in WPM, Typing speed game, WPM, Test accuracy of your typing, Typer pro, Typing speed, Typing speed test',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Online typing test, to see how fast you type. Featuring a fun way to improve typing speed, play ghost games, multiplayer typing game, practice freely. Play with your friends offline, check your wpm and accuracy levels and more.',
      },
      {
        name: 'og:description',
        content:
          'Welcome to the #1 Fun Speed Test! Check your true typing speed, accuracy and skill level in just 60 seconds. Also play games which improves our typing speed',
      },
      { name: 'og:type', content: 'website' },
      { charset: 'UTF-8' },
    ]);
    if (localStorage.getItem('typerCounter') == null)
      localStorage.setItem('typerCounter', '0');
    if (localStorage.getItem('hasGameBegun') == null) {
     localStorage.setItem('hasGameBegun', '1');
    } else {
      this.hasGameBegun = true;
    }
    this.setTyper();
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
    let dialogRef = this.dialog.open(TyperResultComponent, {
      height: '300px',
      width: '600px',
      data: {
        wpm: this.wpmLabel,
        accuracy: this.accuracyVal,
      },
      disableClose:true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  playAgain() {
    window.location.reload();
  }

  gameStart() {
    this.hasGameBegun = true;
    window.scroll({
      top: 100,
      behavior: 'smooth',
    });
  }

  startTimer() {
    this.timer = TIMER;
    this.timerInterval = setInterval(() => {
      if (this.timer <= 0) {
        clearInterval(this.timerInterval);
        this.timerFinish();
        this.hasGameBegun = true;
      }
      if (this.timer > 0) {
        this.progressColor =
          this.timerPercent > 69
            ? 'warn'
            : this.timerPercent > 49
            ? 'primary'
            : 'accent';
        this.timer--;
        this.timerPercent = (100 * (TIMER - this.timer)) / TIMER;
        this.timerLabel = this.timer.toString();
        this.progressLabel = 100 - this.timerPercent;
      }
    }, 1000);
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

  replay() {
    let dialogRef = this.dialog.open(TyperReplayComponent, {
      height: '500px',
      width: '800px',
      data: {
        typerText: this.typerText,
        trailList: this.delays,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeFont() {}

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

  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
