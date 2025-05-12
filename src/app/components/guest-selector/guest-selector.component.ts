import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-guest-selector',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './guest-selector.component.html',
  styleUrl: './guest-selector.component.css'
})
export class GuestSelectorComponent {
  @Input() isActive: boolean = false;
  @Output() showRoomSelector = new EventEmitter<void>();

  onClick() {
    this.showRoomSelector.emit();
  }
}
