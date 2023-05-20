import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './productos/pages/list-products/list-products.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./productos/productos.module').then((m) => m.ProductosModule),
  },  
  {
    path: 'compras',
    loadChildren: () =>
      import('./compras/compras.module').then((m) => m.ComprasModule),
  }, 
  {
    path: 'historial',
    loadChildren: () =>
      import('./historial/historial.module').then((m) => m.HistorialModule),
  }, 
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
