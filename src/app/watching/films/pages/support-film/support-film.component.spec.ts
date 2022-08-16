import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFilmComponent } from './support-film.component';

describe('SupportFilmComponent', () => {
  let component: SupportFilmComponent;
  let fixture: ComponentFixture<SupportFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
