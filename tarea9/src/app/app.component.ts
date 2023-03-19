import { Component, OnInit } from '@angular/core';
import { NombreServicioService } from '../nombre-servicio.service';

@Component({
  selector: 'app-nombre-componente',
  templateUrl: './nombre-componente.component.html',
  styleUrls: ['./nombre-componente.component.css']
})
export class NombreComponenteComponent implements OnInit {

  datos: any[];

  constructor(private servicio: NombreServicioService) { }

  ngOnInit(): void {
    this.servicio.obtenerDatos().subscribe
