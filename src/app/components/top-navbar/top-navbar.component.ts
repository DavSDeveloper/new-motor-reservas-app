import { Component } from '@angular/core';
import { PromoCodeModalComponent } from '../promo-code-modal/promo-code-modal.component';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [PromoCodeModalComponent],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})
export class TopNavbarComponent {
  promoCodeModalOpen: boolean = false;

  onPromoCodeApplied(promoCode: string) {
    console.log('Promo code applied:', promoCode);
    this.promoCodeModalOpen = false;
  }
}
