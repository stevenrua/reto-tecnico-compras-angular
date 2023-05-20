import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialRoutingModule } from './historial-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { GenHistorialComponent } from './pages/gen-historial/gen-historial.component';


@NgModule({
  declarations: [GenHistorialComponent],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,    
  ]
})
export class HistorialModule { }
