import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonvoiceComponent } from './cartoonvoice.component';

describe('CartoonvoiceComponent', () => {
  let component: CartoonvoiceComponent;
  let fixture: ComponentFixture<CartoonvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoonvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
