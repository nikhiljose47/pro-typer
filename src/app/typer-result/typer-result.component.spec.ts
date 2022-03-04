import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyperResultComponent } from './typer-result.component';

describe('TyperResultComponent', () => {
  let component: TyperResultComponent;
  let fixture: ComponentFixture<TyperResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyperResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyperResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
