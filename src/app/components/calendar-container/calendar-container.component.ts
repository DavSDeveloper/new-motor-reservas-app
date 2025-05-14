import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-container.component.html',
  styleUrl: './calendar-container.component.css'
})
export class CalendarContainerComponent {
  @Input() fechaEntrada: Date | null = null;
  @Input() fechaSalida: Date | null = null;
  @Input() modo: 'entrada' | 'salida' | null = null;
  @Input() minDate: Date | null = null;
  @Output() fechaSeleccionada = new EventEmitter<Date>();

  currentDate = new Date();
  selectedDate: Date | null = null;
  dayNames = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

  get nextMonthDate(): Date {
    const next = new Date(this.currentDate);
    next.setMonth(next.getMonth() + 1);
    return next;
  }

  getMonthName(date: Date): string {
    return date.toLocaleDateString('es-ES', { month: 'long' }).slice(0, 3).toUpperCase();
  }  

  getCalendarDays(date: Date): { date: Date, inMonth: boolean }[] {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const startDay = (firstDay.getDay() + 6) % 7;

    const days: { date: Date, inMonth: boolean }[] = [];

    for (let i = 0; i < startDay; i++) {
      const d = new Date(year, month, -startDay + i + 1);
      days.push({ date: d, inMonth: false });
    }

    const lastDate = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= lastDate; i++) {
      days.push({ date: new Date(year, month, i), inMonth: true });
    }

    const totalDays = days.length;
    const extraDays = 7 - (totalDays % 7);
    if (extraDays < 7) {
      for (let i = 1; i <= extraDays; i++) {
        days.push({ date: new Date(year, month + 1, i), inMonth: false });
      }
    }

    return days;
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.currentDate = new Date(this.currentDate);
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.currentDate = new Date(this.currentDate);
  }

  selectDate(date: Date) {
    this.selectedDate = date;
    this.fechaSeleccionada.emit(date);
  }

  isSelected(date: Date): boolean {
    return (
      this.fechaEntrada?.toDateString() === date.toDateString() ||
      this.fechaSalida?.toDateString() === date.toDateString()
    );
  }

  isInRange(date: Date): boolean {
    if (this.fechaEntrada && this.fechaSalida) {
      return (
        date > this.fechaEntrada && date < this.fechaSalida
      );
    }
    return false;
  }

  isStart(date: Date): boolean {
    return this.fechaEntrada?.toDateString() === date.toDateString();
  }
  
  isEnd(date: Date): boolean {
    return this.fechaSalida?.toDateString() === date.toDateString();
  }

  isDisabled(date: Date): boolean {
    const testDate = new Date(date);
    testDate.setHours(0, 0, 0, 0);
  
    const min = this.minDate ? new Date(this.minDate) : null;
    if (min) min.setHours(0, 0, 0, 0);
  
    // Si estamos seleccionando la fecha de salida, deshabilitar la misma fecha de entrada
    if (this.modo === 'salida' && this.fechaEntrada) {
      const entrada = new Date(this.fechaEntrada);
      entrada.setHours(0, 0, 0, 0);
  
      if (testDate.getTime() === entrada.getTime()) {
        return true;
      }
    }
  
    return !!min && testDate < min;
  }  
}
