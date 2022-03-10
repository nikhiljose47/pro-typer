import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameThreeUnitComponent } from './game-three-unit.component';

describe('GameThreeUnitComponent', () => {
  let component: GameThreeUnitComponent;
  let fixture: ComponentFixture<GameThreeUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameThreeUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameThreeUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
