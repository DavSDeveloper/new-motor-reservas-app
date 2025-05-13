import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [MatIconModule, DatePipe, CommonModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {
  @Input() isActive: boolean = false;
  @Input() tipoActivo: 'entrada' | 'salida' | null = null;
  @Input() fechaEntrada: Date | null = null;
  @Input() fechaSalida: Date | null = null;
  @Output() abrirCalendario = new EventEmitter<'entrada' | 'salida'>();

  abrirEntrada() {
    this.abrirCalendario.emit('entrada');
  }
  
  abrirSalida() {
    this.abrirCalendario.emit('salida');
  }  
}
