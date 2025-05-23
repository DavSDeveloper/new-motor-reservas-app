import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-promo-code-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './promo-code-modal.component.html',
  styleUrl: './promo-code-modal.component.css'
})
export class PromoCodeModalComponent {
  @Input() isVisible: boolean = false;
  @Output() onClose = new EventEmitter<void>();
  @Output() onApply = new EventEmitter<string>();

  promoCode: string = '';
  errorMessage: string = '';

  close() {
    this.promoCode = '';
    this.errorMessage = '';
    this.onClose.emit();
  }

  applyCode() {
    if (this.promoCode.trim().length < 5) {
      this.errorMessage = 'El código debe tener al menos 5 caracteres.';
      return;
    }
    this.onApply.emit(this.promoCode.trim());
    this.close();
  }
}
