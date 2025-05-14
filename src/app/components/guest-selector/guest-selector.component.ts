import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-guest-selector',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './guest-selector.component.html',
  styleUrl: './guest-selector.component.css'
})
export class GuestSelectorComponent {
  @Input() isActive: boolean = false;
  @Input() resumen = { totalHabitaciones: 0, totalAdultos: 0, totalNinos: 0 };
  @Output() showRoomSelector = new EventEmitter<void>();

  mostrarResumen: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isActive'] && this.isActive) {
      this.mostrarResumen = true;
    }
  }

  onClick() {
    this.mostrarResumen = true;
    this.showRoomSelector.emit();
  }
}
