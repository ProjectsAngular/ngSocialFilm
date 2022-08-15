import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsRelatedComponent } from './films-related.component';

describe('FilmsRelatedComponent', () => {
  let component: FilmsRelatedComponent;
  let fixture: ComponentFixture<FilmsRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsRelatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
