import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballTypingGamePlayerComponent } from './football-typing-game-player.component';

describe('FootballTypingGamePlayerComponent', () => {
  let component: FootballTypingGamePlayerComponent;
  let fixture: ComponentFixture<FootballTypingGamePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballTypingGamePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballTypingGamePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
