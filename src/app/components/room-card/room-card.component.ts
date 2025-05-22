import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.css',
})
export class RoomCardComponent {
  @Input() room: any;
  @Input() isActive: boolean = false;
  ofertaActiva: boolean = false;

  toggleOferta() {
    this.ofertaActiva = !this.ofertaActiva;
    this.isActive = this.ofertaActiva;
  }
}
