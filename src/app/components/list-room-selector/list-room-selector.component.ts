import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-room-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-room-selector.component.html',
  styleUrl: './list-room-selector.component.css',
})
export class ListRoomSelectorComponent {
  opciones = [
    { id: 1, descripcion: '1 adulto', precio: 262556.5, seleccionado: false },
    { id: 2, descripcion: '1 adulto', precio: 262556.5, seleccionado: false },
  ];

  totalSeleccionadas = 0;

  @Input() isVisible: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  seleccionar(id: number) {
    const opcion = this.opciones.find((o) => o.id === id);
    if (opcion) {
      opcion.seleccionado = !opcion.seleccionado;
    }
    this.totalSeleccionadas = this.opciones.filter(
      (o) => o.seleccionado
    ).length;
  }

  close() {
    this.onClose.emit();
  }
}
