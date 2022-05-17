import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFourComponent } from './game-four.component';

describe('GameFourComponent', () => {
  let component: GameFourComponent;
  let fixture: ComponentFixture<GameFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
