import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { IngresoFacComponent } from './pages/ingreso-fac/ingreso-fac.component';

const routes: Routes = [
  {path: "paginas/inicio", component: InicioComponent},
  {path: "paginas/clientes", component: ClientesComponent},
  {path: "paginas/facturas", component: FacturasComponent},
  {path: "paginas/ingresofac", component: IngresoFacComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
