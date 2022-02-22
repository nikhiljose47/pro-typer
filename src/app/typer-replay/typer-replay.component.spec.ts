import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyperReplayComponent } from './typer-replay.component';

describe('TyperReplayComponent', () => {
  let component: TyperReplayComponent;
  let fixture: ComponentFixture<TyperReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyperReplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyperReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
