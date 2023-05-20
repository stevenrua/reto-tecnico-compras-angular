import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { NewCompraComponent } from './pages/new-compra/new-compra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [NewCompraComponent],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ComprasRoutingModule
  ]
})
export class ComprasModule { }
