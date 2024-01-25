import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { Detalle } from 'src/app/domain/detalle';
import { Factura } from 'src/app/domain/factura';
import { FacturasServices } from 'src/app/services/facturas-services';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit{
  facturas :any
  detalles : any
  fac : Factura = new Factura()
  cli : Cliente = new Cliente()
  det : Detalle = new Detalle()
  constructor(private facturaService : FacturasServices){}
  ngOnInit():void{
    this.facturas = this.facturaService.getFacturas()
    this.detalles = this.facturaService.getDetalles()
  }

}
