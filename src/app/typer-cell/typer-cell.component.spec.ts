import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyperCellComponent } from './typer-cell.component';

describe('TyperCellComponent', () => {
  let component: TyperCellComponent;
  let fixture: ComponentFixture<TyperCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyperCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyperCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
