import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { MaterialModule } from '../material/material.module';
import { ProductsRoutingModule } from './productos-routing.module';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    ListProductsComponent,
    NewProductComponent,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ProductsRoutingModule
  ]
})
export class ProductosModule { }
