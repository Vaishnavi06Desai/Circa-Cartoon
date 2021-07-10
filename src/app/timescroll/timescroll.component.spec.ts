import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimescrollComponent } from './timescroll.component';

describe('TimescrollComponent', () => {
  let component: TimescrollComponent;
  let fixture: ComponentFixture<TimescrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimescrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimescrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
