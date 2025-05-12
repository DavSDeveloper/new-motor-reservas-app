import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';
import { GuestSelectorComponent } from '../../components/guest-selector/guest-selector.component';
import { TopNavbarComponent } from '../../components/top-navbar/top-navbar.component';
import { RoomSelectorComponent } from '../../components/room-selector/room-selector.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-search',
  standalone: true,
  imports: [DatePickerComponent, GuestSelectorComponent, TopNavbarComponent, RoomSelectorComponent, CommonModule],
  templateUrl: './booking-search.component.html',
  styleUrl: './booking-search.component.css'
})
export class BookingSearchComponent {
  roomSelectorVisible = false;

  @ViewChild('roomWrapper') roomWrapper!: ElementRef;

  mostrarRoomSelector() {
    this.roomSelectorVisible = !this.roomSelectorVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.roomWrapper?.nativeElement.contains(event.target)) {
      this.roomSelectorVisible = false;
    }
  }
}
