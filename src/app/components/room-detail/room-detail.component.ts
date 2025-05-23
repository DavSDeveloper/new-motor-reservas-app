import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.css',
})
export class RoomDetailComponent {
  @Input() isVisible: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  close() {
    this.onClose.emit();
  }
}
