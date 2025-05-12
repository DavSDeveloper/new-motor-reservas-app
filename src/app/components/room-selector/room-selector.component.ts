import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  rooms: Room[] = [
    { adults: 1, hasChildren: false, children: 0 }
  ];

  counterAnimationKeys: { [key: string]: boolean } = {};

  addRoom() {
    this.rooms.push({ adults: 1, hasChildren: false, children: 0 });
  }

  removeRoom(index: number) {
    this.rooms.splice(index, 1);
  }

  incrementAdults(index: number) {
    this.rooms[index].adults++;
  }

  decrementAdults(index: number) {
    if (this.rooms[index].adults > 1) this.rooms[index].adults--;
  }

  onChildrenToggle(index: number) {
    if (!this.rooms[index].hasChildren) {
      this.rooms[index].children = 0;
    }
  }

  incrementChildren(index: number) {
    this.rooms[index].children++;
  }

  decrementChildren(index: number) {
    if (this.rooms[index].children > 0) this.rooms[index].children--;
  }

  animateCounter(index: number, type: 'adults' | 'children') {
    const key = `${type}-${index}`;
    this.counterAnimationKeys[key] = true;

    setTimeout(() => {
      this.counterAnimationKeys[key] = false;
    }, 300);
  }

  apply() {
    console.log(this.rooms);
  }
}
