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
        nombre: 'Habitación Estándar 2 camas',
        metros: 15,
        camas: '2x Cama Individual',
        vista: 'Vista al patio interior',
        servicios: ['Wi-Fi', 'Televisión'],
        precioOriginal: 695000,
        precioFinal: 625500,
        imagen: 'assets/foto1.jpg',
        descripcion:
          'Esta habitación incluye TV de pantalla plana con canales por cable, baño privado y zona de comedor al aire libre. Dispone de 2 camas.',
        instalaciones: [
          'TV',
          'Escritorio',
          'Cuarto de baño privado',
          'Ropa de cama y toallas',
          'Conexión inalámbrica a internet',
        ],
        ofertas: [
          {
            nombre: 'No Reembolsable',
            condiciones: 'Oferta no reembolsable - mejor precio',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precioOriginal: 695000,
            precio: 625500,
            destacado: true,
          },
          {
            nombre: 'Estándar Rate',
            condiciones: 'Términos especiales de cancelación',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precio: 695000,
            destacado: false,
          },
        ],
      },
      {
        nombre: 'Habitación Estándar Varias Camas',
        metros: 18,
        camas: '1x Cama Doble - 2x Cama Individual',
        vista: 'Vista al jardín',
        servicios: ['Wi-Fi', 'Televisión'],
        precioOriginal: 927000,
        precioFinal: 834300,
        imagen: 'assets/foto2.jpg',
        descripcion:
          'Habitación con TV de pantalla plana por cable, baño privado y balcón con vistas al jardín. Dispone de 3 camas.',
        instalaciones: [
          'TV',
          'Escritorio',
          'Cuarto de baño privado',
          'Ropa de cama y toallas',
          'Conexión inalámbrica a internet',
        ],
        ofertas: [
          {
            nombre: 'No Reembolsable',
            condiciones: 'Oferta no reembolsable - mejor precio',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precioOriginal: 927000,
            precio: 834300,
            destacado: true,
          },
          {
            nombre: 'Estándar Rate',
            condiciones: 'Términos especiales de cancelación',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precio: 927000,
            destacado: false,
          },
        ],
      },
      {
        nombre: 'Habitación familiar',
        metros: 20,
        camas: '1x Cama Doble - 3x Cama Individual',
        vista: 'Vista al patio interior',
        servicios: ['Wi-Fi', 'Televisión'],
        precioOriginal: 1158000,
        precioFinal: 1042200,
        imagen: 'assets/foto3.jpg',
        descripcion:
          'Esta habitación familiar consta de TV de pantalla plana con canales por cable, baño privado y zona de comedor al aire libre. La unidad cuenta con 4 camas.',
        instalaciones: [
          'TV',
          'Escritorio',
          'Cuarto de baño privado',
          'Ropa de cama y toallas',
          'Conexión inalámbrica a internet',
        ],
        ofertas: [
          {
            nombre: 'No Reembolsable',
            condiciones: 'Oferta no reembolsable - mejor precio',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precioOriginal: 1158000,
            precio: 1042200,
            destacado: true,
          },
          {
            nombre: 'Estándar Rate',
            condiciones: 'Términos especiales de cancelación',
            pago: '100% prepago',
            comida: 'Desayuno incluido',
            precio: 1158000,
            destacado: false,
          },
        ],
      },
    ];
  }
}
