import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {
  @Output() abrirCalendario = new EventEmitter<'entrada' | 'salida'>();

  abrirEntrada() {
    this.abrirCalendario.emit('entrada');
  }
  
  abrirSalida() {
    this.abrirCalendario.emit('salida');
  }  
}
