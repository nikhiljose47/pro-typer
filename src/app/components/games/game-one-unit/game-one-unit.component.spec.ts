import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOneUnitComponent } from './game-one-unit.component';

describe('GameOneUnitComponent', () => {
  let component: GameOneUnitComponent;
  let fixture: ComponentFixture<GameOneUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameOneUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOneUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
