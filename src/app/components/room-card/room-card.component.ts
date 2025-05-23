import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RoomDetailComponent } from "../room-detail/room-detail.component";

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [MatIconModule, CommonModule, RoomDetailComponent],
  templateUrl: './room-card.component.html',
  styleUrl: './room-card.component.css',
})
export class RoomCardComponent {
  @Input() room: any;
  @Input() isActive: boolean = false;
  ofertaActiva: boolean = false;
  roomDetailVisible: boolean = false;

  toggleOferta() {
    this.ofertaActiva = !this.ofertaActiva;
    this.isActive = this.ofertaActiva;
  }
}
