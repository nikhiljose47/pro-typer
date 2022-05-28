import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyperUnitComponent } from './typer-unit.component';

describe('TyperUnitComponent', () => {
  let component: TyperUnitComponent;
  let fixture: ComponentFixture<TyperUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyperUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyperUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
