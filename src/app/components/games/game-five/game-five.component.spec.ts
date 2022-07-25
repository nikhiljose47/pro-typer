import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFiveComponent } from './game-five.component';

describe('GameFiveComponent', () => {
  let component: GameFiveComponent;
  let fixture: ComponentFixture<GameFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
