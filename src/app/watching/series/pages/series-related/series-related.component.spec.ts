import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesRelatedComponent } from './series-related.component';

describe('SeriesRelatedComponent', () => {
  let component: SeriesRelatedComponent;
  let fixture: ComponentFixture<SeriesRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesRelatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
