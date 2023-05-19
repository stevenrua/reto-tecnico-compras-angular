import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../interface/product.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{
  miFormulario: FormGroup = this.fb.group({
    id: [{ value: '', disabled: false }],
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        //Validators.pattern(this.validatorService.namePattern),
      ],
    ],
    inInventory: ['', [Validators.required, Validators.min(0)]],
    enabled: ['', Validators.required],
    min: ['', [Validators.required, Validators.min(0)]],
    max: ['', [Validators.required, Validators.min(0)]],    
  });

  constructor(
    //private validatorService: ValidatorsService,
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}
  product: Product = {
    name: '',
    inInventory: 0,
    enabled: false,
    min: 0,
    max: 0,
  }
  ngOnInit(): void {
    if (!this.router.url.includes('updateproduct')) return;

    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.productService.getProductById(params['id']))
      )
      .subscribe((product) => {
        this.product = product;
        this.miFormulario.reset({ ...this.product });
      });
  }

  updateProduct() {
    const formValue = { ...this.miFormulario.value };
    this.product = formValue;
    if (this.product.id) {
      this.productService.updateProduct(this.product.id, this.product).subscribe(
        (product) => {
          this.mostrarSnackBar('Producto Actualizado');
          this.router.navigate(['productos/listproducts']);
          
        },
        (error) => {
          this.mostrarSnackBar('Producto ya registrado, ingresa uno nuevo');
          console.log(error)
        }
      );
    } else {
      this.productService.newProduct(this.product).subscribe((_) => {
      this.router.navigate(['productos/listproducts']);
      this.mostrarSnackBar('Producto agregado exitosamente');
        },
        (error) => {
          this.mostrarSnackBar('Producto ya registrado, ingresa uno nuevo');
          this.miFormulario.reset({});          
        });
      }
  }

  get validatorName() {
    const errors = this.miFormulario.get('name')?.errors;

    if (errors?.['minlength']) {
      return 'Minimo 3 carácteres';
    } else if (errors?.['required']) {
      return 'campo requerido';
    } else if (errors?.['pattern']) {
      return 'Ingresa solo letras';
    }
    return '';
  }

  get validatorInInventory() {
    const errors = this.miFormulario.get('inInventory')?.errors;

    if (errors?.['min']) {
      return 'Solo números positivos';
    } else if (errors?.['required']) {
      return 'campo requerido';
    }
    return '';
  }

  get validatorMin() {
    const errors = this.miFormulario.get('min')?.errors;

    if (errors?.['min']) {
      return 'Solo números positivos';
    } else if (errors?.['required']) {
      return 'campo requerido';
    }
    return '';
  }

  get validatorMax() {
    const errors = this.miFormulario.get('max')?.errors;

    if (errors?.['min']) {
      return 'Solo números positivos';
    } else if (errors?.['required']) {
      return 'campo requerido';
    }
    return '';
  }  

  validarCampo(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }
  
  mostrarSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, 'Ok!', {
      duration: 10000,
    });
  }

  returnHome() {
    this.router.navigate(['productos/listproducts']);
  }

}
