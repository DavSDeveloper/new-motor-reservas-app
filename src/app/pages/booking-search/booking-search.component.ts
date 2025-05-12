import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';
import { GuestSelectorComponent } from '../../components/guest-selector/guest-selector.component';
import { TopNavbarComponent } from '../../components/top-navbar/top-navbar.component';
import { RoomSelectorComponent } from '../../components/room-selector/room-selector.component';
import { CommonModule } from '@angular/common';
import { CalendarContainerComponent } from '../../components/calendar-container/calendar-container.component';

@Component({
  selector: 'app-booking-search',
  standalone: true,
  imports: [
    DatePickerComponent,
    GuestSelectorComponent,
    TopNavbarComponent,
    RoomSelectorComponent,
    CommonModule,
    CalendarContainerComponent,
  ],
  templateUrl: './booking-search.component.html',
  styleUrl: './booking-search.component.css',
})
export class BookingSearchComponent {
  calendarVisible = false;
  roomSelectorVisible = false;

  tipoCalendario: 'entrada' | 'salida' | null = null;

  @ViewChild('dateControls', { read: ElementRef }) dateControls!: ElementRef;
  @ViewChild('roomWrapper') roomWrapper!: ElementRef;

  calendarPositionStyle = {
    top: '0px',
    left: '50%',
    transform: 'translateX(-50%)',
    maxWidth: '100%'
  };
  

  mostrarCalendario(tipo: 'entrada' | 'salida') {
    this.calendarVisible = true;
    this.tipoCalendario = tipo;
  
    setTimeout(() => {
      const rect = this.dateControls.nativeElement.getBoundingClientRect();
      this.calendarPositionStyle = {
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + rect.width / 2}px`,
        transform: 'translateX(-50%)',
        maxWidth: '100%'
      };
    });
  }
  mostrarRoomSelector() {
    this.roomSelectorVisible = !this.roomSelectorVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.roomWrapper?.nativeElement.contains(target)) {
      this.roomSelectorVisible = false;
    }

    const isInsideDateControls = target.closest('.date-controls');
    if (!isInsideDateControls) {
      this.calendarVisible = false;
    }
  }
}
