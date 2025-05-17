import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Room {
  adults: number;
  hasChildren: boolean;
  children: number;
}

@Component({
  selector: 'app-room-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-selector.component.html',
  styleUrl: './room-selector.component.css'
})
export class RoomSelectorComponent {
  @Output() habitacionesAplicadas = new EventEmitter<Room[]>();
  @Output() habitacionesCambiadas = new EventEmitter<Room[]>();
  @Output() aplicar = new EventEmitter<void>();

  @Input() rooms: Room[] = [
    { adults: 0, hasChildren: false, children: 0 }
  ];
  @Input() puedeAplicar: boolean = false;

  counterAnimationKeys: { [key: string]: boolean } = {};

  addRoom() {
    this.rooms.push({ adults: 1, hasChildren: false, children: 0 });
    this.habitacionesCambiadas.emit(this.rooms);
  }

  removeRoom(index: number) {
    this.rooms.splice(index, 1);
    this.habitacionesCambiadas.emit(this.rooms);
  }

  incrementAdults(index: number) {
    this.rooms[index].adults++;
    this.habitacionesCambiadas.emit(this.rooms);
  }

  decrementAdults(index: number) {
    if (this.rooms[index].adults > 1) this.rooms[index].adults--;
    this.habitacionesCambiadas.emit(this.rooms);
  }

  onChildrenToggle(index: number) {
    if (!this.rooms[index].hasChildren) {
      this.rooms[index].children = 0;
      this.habitacionesCambiadas.emit(this.rooms);
    }
  }

  incrementChildren(index: number) {
    this.rooms[index].children++;
    this.habitacionesCambiadas.emit(this.rooms);
  }

  decrementChildren(index: number) {
    if (this.rooms[index].children > 0) this.rooms[index].children--;
    this.habitacionesCambiadas.emit(this.rooms);
  }

  animateCounter(index: number, type: 'adults' | 'children') {
    const key = `${type}-${index}`;
    this.counterAnimationKeys[key] = true;

    setTimeout(() => {
      this.counterAnimationKeys[key] = false;
    }, 300);
  }

  onAplicarClick() {
    this.aplicar.emit();
  }
}
