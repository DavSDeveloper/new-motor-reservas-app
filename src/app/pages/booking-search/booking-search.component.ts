import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';
import { GuestSelectorComponent } from '../../components/guest-selector/guest-selector.component';
import { TopNavbarComponent } from '../../components/top-navbar/top-navbar.component';
import { RoomSelectorComponent } from '../../components/room-selector/room-selector.component';
import { CommonModule } from '@angular/common';
import { CalendarContainerComponent } from '../../components/calendar-container/calendar-container.component';
import { Room } from '../../models/room.model';

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
  showRoomSelector = false;

  arrivalDate: Date | null = null;
  departureDate: Date | null = null;

  isCalendarVisible = false;
  fechaEntrada: Date | null = null;
  fechaSalida: Date | null = null;
  tipoActivo: 'entrada' | 'salida' | null = null;

  roomSelectorVisible = false;
  resumenHabitaciones = {
    totalHabitaciones: 0,
    totalAdultos: 0,
    totalNinos: 0,
  };
  rooms: Room[] = [];

  @ViewChild('dateControls', { read: ElementRef }) dateControls!: ElementRef;
  @ViewChild('roomWrapper') roomWrapper!: ElementRef;

  ngOnInit(): void {
    this.isCalendarVisible = true;
    this.tipoActivo = 'entrada';
  }  

  mostrarCalendario(tipo: 'entrada' | 'salida') {
    this.isCalendarVisible =
      !this.isCalendarVisible || this.tipoActivo !== tipo;
    this.tipoActivo = tipo;
  }

  mostrarRoomSelector() {
    if (!this.roomSelectorVisible) {
      this.isCalendarVisible = false;
      this.roomSelectorVisible = true;
    } else {
      this.roomSelectorVisible = false;
    }
  }

  actualizarResumen(rooms: Room[]) {
    this.resumenHabitaciones.totalHabitaciones = rooms.length;
    this.resumenHabitaciones.totalAdultos = rooms.reduce(
      (sum, r) => sum + r.adults,
      0
    );
    this.resumenHabitaciones.totalNinos = rooms.reduce(
      (sum, r) => sum + r.children,
      0
    );
    this.rooms = rooms;
  }

  onFechaSeleccionada(fecha: Date) {
    if (this.tipoActivo === 'entrada') {
      this.fechaEntrada = fecha;
      this.tipoActivo = 'salida';
      this.isCalendarVisible = true;
    } else if (this.tipoActivo === 'salida') {
      this.fechaSalida = fecha;
      this.isCalendarVisible = false;
      this.roomSelectorVisible = true;
    }
  }  

  getMinDate(): Date | null {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    if (this.tipoActivo === 'entrada') {
      const minEntrada = new Date(today);
      minEntrada.setDate(minEntrada.getDate() + 1);
      return minEntrada;
    }
  
    if (this.tipoActivo === 'salida' && this.fechaEntrada) {
      const minSalida = new Date(this.fechaEntrada);
      minSalida.setDate(minSalida.getDate() + 1);
      return minSalida;
    }
  
    return null;
  }  

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (this.roomWrapper?.nativeElement.contains(target)) {
      return;
    }

    if (!this.roomWrapper?.nativeElement.contains(target)) {
      this.roomSelectorVisible = false;
    }

    if (!this.dateControls?.nativeElement.contains(target)) {
      this.isCalendarVisible = false;
    }
  }
}
