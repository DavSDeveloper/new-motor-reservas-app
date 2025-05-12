import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-container.component.html',
  styleUrl: './calendar-container.component.css'
})
export class CalendarContainerComponent {
  currentDate = new Date();
  selectedDate: Date | null = null;
  dayNames = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];

  get nextMonthDate(): Date {
    const next = new Date(this.currentDate);
    next.setMonth(next.getMonth() + 1);
    return next;
  }

  getMonthName(date: Date): string {
    return date.toLocaleDateString('es-ES', { month: 'long' }).toUpperCase();
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
    console.log('Fecha seleccionada:', date);
  }

  isSelected(date: Date): boolean {
    return this.selectedDate?.toDateString() === date.toDateString();
  }
}
