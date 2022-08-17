import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportSerieComponent } from './support-serie.component';

describe('SupportSerieComponent', () => {
  let component: SupportSerieComponent;
  let fixture: ComponentFixture<SupportSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
