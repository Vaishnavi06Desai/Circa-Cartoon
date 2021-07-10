import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroinclusionComponent } from './superheroinclusion.component';

describe('SuperheroinclusionComponent', () => {
  let component: SuperheroinclusionComponent;
  let fixture: ComponentFixture<SuperheroinclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroinclusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroinclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
