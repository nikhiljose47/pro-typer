import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballTypingGameComponent } from './football-typing-game.component';

describe('FootballTypingGameComponent', () => {
  let component: FootballTypingGameComponent;
  let fixture: ComponentFixture<FootballTypingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballTypingGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballTypingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
