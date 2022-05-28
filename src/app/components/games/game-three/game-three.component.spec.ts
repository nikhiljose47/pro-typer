import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameThreeComponent } from './game-three.component';

describe('GameThreeComponent', () => {
  let component: GameThreeComponent;
  let fixture: ComponentFixture<GameThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
