import { Component, OnInit } from '@angular/core';
import { RoomCardComponent } from '../room-card/room-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RoomCardComponent],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css',
})
export class RoomListComponent implements OnInit {
  habitaciones: any[] = [];

  ngOnInit(): void {
    this.habitaciones = [
      {
        nombre: 'Habitación Doble Económica',
        metros: 12,
        camas: '1x Cama Doble',
        vista: 'Vista al patio interior',
        servicios: ['Wi-Fi', 'Aire acondicionado', 'Televisión'],
        precioOriginal: 2934455,
        precioFinal: 2494286,
        imagen: 'assets/foto1.jpg',
        ofertas: [
          {
            nombre: 'Tarifa No Reembolsable (15% Descuento) + Desayuno',
            condiciones: 'Oferta no reembolsable - mejor precio',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precioOriginal: 463335,
            precio: 393834.75,
            destacado: true,
          },
          {
            nombre: 'Tarifa Flexible + Desayuno',
            condiciones: 'Términos especiales de cancelación',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precio: 463335,
            destacado: false,
          },
        ],
      },
      {
        nombre: 'Habitación Doble Estándar',
        metros: 15,
        camas: '1x Cama Doble',
        vista: 'Vista al patio interior',
        servicios: ['Wi-Fi', 'Aire acondicionado', 'Televisión'],
        precioOriginal: 3356673,
        precioFinal: 2853172,
        imagen: 'assets/foto2.jpg',
        ofertas: [
          {
            nombre: 'Tarifa No Reembolsable (15% Descuento) + Desayuno',
            condiciones: 'Oferta no reembolsable - mejor precio',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precioOriginal: 463335,
            precio: 393834.75,
            destacado: true,
          },
          {
            nombre: 'Tarifa Flexible + Desayuno',
            condiciones: 'Términos especiales de cancelación',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precio: 463335,
            destacado: false,
          },
        ],
      },
      {
        nombre: 'Habitación Estándar - 2 Camas',
        metros: 18,
        camas: '2x Cama Doble',
        vista: 'Vista al patio interior',
        servicios: ['Wi-Fi', 'Aire acondicionado', 'Televisión'],
        precioOriginal: 3990000,
        precioFinal: 3391500,
        imagen: 'assets/foto3.jpg',
        ofertas: [
          {
            nombre: 'Tarifa No Reembolsable (15% Descuento) + Desayuno',
            condiciones: 'Oferta no reembolsable - mejor precio',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precioOriginal: 463335,
            precio: 393834.75,
            destacado: true,
          },
          {
            nombre: 'Tarifa Flexible + Desayuno',
            condiciones: 'Términos especiales de cancelación',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precio: 463335,
            destacado: false,
          },
        ],
      },
    ];
  }
}
