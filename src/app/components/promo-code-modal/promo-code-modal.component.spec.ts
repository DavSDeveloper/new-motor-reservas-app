import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCodeModalComponent } from './promo-code-modal.component';

describe('PromoCodeModalComponent', () => {
  let component: PromoCodeModalComponent;
  let fixture: ComponentFixture<PromoCodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoCodeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
