import { Component } from '@angular/core';
import { Cliente } from 'src/app/domain/cliente';
import { Detalle } from 'src/app/domain/detalle';
import { Factura } from 'src/app/domain/factura';
import { FacturasServices } from 'src/app/services/facturas-services';

@Component({
  selector: 'app-ingreso-fac',
  templateUrl: './ingreso-fac.component.html',
  styleUrls: ['./ingreso-fac.component.scss']
})
export class IngresoFacComponent {
  dni : string = ''
  fact : Factura = new Factura()
  det : Detalle = new Detalle()
  codi : any
  nombre : any
  cantidad : any
  precio : any
  constructor(private facturaService : FacturasServices){}

  saveCabecera(){
    this.facturaService.saveFacturas(this.fact).subscribe((deta:Detalle) =>{
      console.log(deta)
      console.log("EL NOMBRE DEL CLIENTE ES" + this.fact.cliente)
    })
    
  }
  
  addDetalle() {
    const detalle: Detalle = {
      codigo: this.codi,
      nombre: this.nombre,
      cantidad: this.cantidad,
      precio: this.precio
    };
  
    if (!this.fact.detalle) {
      this.fact.detalle = [];
    }
  
    this.fact.detalle.push(detalle);
    console.log("ATENTO")
    console.log(this.fact.detalle)
    console.log("FIN")
  }
  

  obtenerCliente() {
    this.facturaService.getCliente(this.dni).subscribe(
      (client: Cliente) => {
        this.fact.cliente = client
        this.addDetalle()
        this.saveCabecera()
        console.log(this.det)
        console.log(client)
        console.log(this.fact.cliente)
        console.log("OJO")
        console.log(this.fact.detalle)
        console.log("FIN DEL OJO")
        alert('INGRESADOXD:');
      },
      error => {
        console.error('Error al obtener el cliente:', error);
      }
    );
  
  }


}
