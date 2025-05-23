import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsBarComponent } from './booking-details-bar.component';

describe('BookingDetailsBarComponent', () => {
  let component: BookingDetailsBarComponent;
  let fixture: ComponentFixture<BookingDetailsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingDetailsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDetailsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
