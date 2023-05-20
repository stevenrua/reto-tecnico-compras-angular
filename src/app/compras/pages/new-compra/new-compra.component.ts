import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompraService } from '../../services/compra.service';
import { CompraInterface } from '../../interface/compra.interface';
import { Product } from '../../interface/product.interface';
import { ProductsService } from 'src/app/productos/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-compra',
  templateUrl: './new-compra.component.html',
  styleUrls: ['./new-compra.component.css']
})
export class NewCompraComponent implements OnInit{
  compraForm = this.fb.group({
    client: this.fb.group({
      identity: ['', Validators.required],
      idType: ['', Validators.required],
      clientName: ['', Validators.required]
    }),
    compra: this.fb.array([])
  });

  compra: CompraInterface = {
    client: {
      identity: 0,
      idType: '',
      clientName: ''
    },
    compra: []
  }

  products1: Product[] =[]
  

  constructor(private fb: FormBuilder, 
    private compraService: CompraService, 
    private productsService: ProductsService,
    private snackBar: MatSnackBar,
    private router: Router,) {}

  ngOnInit(): void {
    this.productsService.getListProducts()
    .subscribe(products =>{
      this.products1 = products;      
    },
    (error) => {
      console.log(error);
    })
  }  

  get compraControls() {
    return this.compraForm.get('compra') as FormArray;
  }

  addCompra() {
    const compraGroup = this.fb.group({
      idProduct: ['', Validators.required],
      quantity: ['', Validators.required]
    });
    this.compraControls.push(compraGroup);
  }

  removeCompra(index: number) {
    this.compraControls.removeAt(index);
  }

  onSubmit() {
    const formValue = this.compraForm.value;
    if (this.compraForm.valid) {
      this.compra = {
        client: {
          identity: Number(formValue.client?.identity),
          idType: formValue.client?.idType ?? '',
          clientName: formValue.client?.clientName ?? ''
        },
        compra: formValue.compra as { idProduct: number; quantity: number; }[]
      };         
      this.compraService.newCompra(this.compra).subscribe(
        (product) => {
          this.mostrarSnackBar('Compra Realizada Exitosamente');
          this.router.navigate(['productos/listproducts']);
          
        },
        (error) => {
          this.mostrarSnackBar('Excedes lo máximo permitido, ya que el producto queda agotado');          
        }
      );
      
    } else {
      console.log('El formulario no es válido');
    }
  }
  mostrarSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Ok!', {
      duration: 10000,
    });
  }
}


