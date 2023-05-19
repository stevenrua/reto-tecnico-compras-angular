import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit{
  products1: Product[] = [];
  productById!: Product;
  dataSource!: MatTableDataSource<Product>;
  displayedColumns: string[] = [
    'id',
    'name',
    'inInventory',
    'enabled',
    'min',
    'max',
    'opciones'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private productService: ProductsService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.productService.getListProducts()
    .subscribe(products =>{
      this.products1 = products;
      this.dataSource = new MatTableDataSource<Product>(this.products1);
      this.dataSource.paginator = this.paginator;
    },
    (error) => {
      console.log(error);
    })
  }
  edit(id: number) {
    this.router.navigate([`./productos/updateproduct/${id}`]);
  }

  guardar(){
    this.router.navigate([`./productos/newproduct`]);
  }

  delete(id: number) {
    this.productService.getProductById(id)
    .subscribe((product) => {
      this.productById = product;
      const dialog = this.dialog.open(ConfirmarComponent, {
        width: '300px',
        data: { ...this.productById },
      });
      dialog.afterClosed().subscribe((result) => {
        if (result) {
          this.productService.deleteProduct(id).subscribe((_) => {
            window.location.reload();
          });
        }
      });
    });
  }

}
