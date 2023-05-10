import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlighttimeComponent } from './flighttime.component';

describe('FlighttimeComponent', () => {
  let component: FlighttimeComponent;
  let fixture: ComponentFixture<FlighttimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlighttimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlighttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
