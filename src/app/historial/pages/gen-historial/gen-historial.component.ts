import { Component, OnInit } from '@angular/core';
import { InterfaceHistorial } from '../../interfaces/interface.historial';
import { HistorialService } from '../../services/historial.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gen-historial',
  templateUrl: './gen-historial.component.html',
  styleUrls: ['./gen-historial.component.css']
})
export class GenHistorialComponent implements OnInit{
  data: InterfaceHistorial = {
    client: {
      id: 0,
      identity: 0,
      date: '',
      idType: '',
      clientName: '',
    },
    products: []
  };

  numbers!: number[]; // Array de números para el desplegable
  selectedNumber!: number; // Número seleccionado en el desplegable

  search(): void {
    this.serviceHistorial.genHistorial(this.selectedNumber)
    .subscribe(historial => {
      this.data = historial
    },
    (error) => {
      console.log(error);
    })
    console.log('Buscar número:', this.selectedNumber);
  }

  constructor(private serviceHistorial: HistorialService, 
    private snackBar: MatSnackBar,
    private router: Router,) {}

  ngOnInit(): void {
    this.serviceHistorial.findDetails()
    .subscribe((details: any) =>{
      this.numbers = details.map((item: { buyId: any; }) => item.buyId);      
    },
    (error) => {
      console.log(error);
    })
  }
}
