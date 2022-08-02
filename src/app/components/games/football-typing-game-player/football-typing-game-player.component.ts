import { Component, Input, OnInit } from '@angular/core';
import { FootballPlayer } from 'src/app/shared-model/classes';

@Component({
  selector: 'football-typing-game-player',
  templateUrl: './football-typing-game-player.component.html',
  styleUrls: ['./football-typing-game-player.component.scss']
})
export class FootballTypingGamePlayerComponent implements OnInit {
 @Input() value: FootballPlayer;

  ngOnInit(): void {
  }

}
