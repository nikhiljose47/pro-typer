import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyperPracticeComponent } from './typer-practice.component';

describe('TyperPracticeComponent', () => {
  let component: TyperPracticeComponent;
  let fixture: ComponentFixture<TyperPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyperPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyperPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
