import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTwoUnitComponent } from './game-two-unit.component';

describe('GameTwoUnitComponent', () => {
  let component: GameTwoUnitComponent;
  let fixture: ComponentFixture<GameTwoUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTwoUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTwoUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
