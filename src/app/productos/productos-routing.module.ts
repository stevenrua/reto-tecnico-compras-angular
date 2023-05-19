import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListProductsComponent } from "./pages/list-products/list-products.component";
import { NewProductComponent } from "./pages/new-product/new-product.component";

const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'listproducts', component: ListProductsComponent },
        { path: 'newproduct', component: NewProductComponent },
        { path: 'updateproduct/:id', component: NewProductComponent },
        //{ path: 'updateaffiliate/:id', component: NewAffiliateComponent },
        { path: '**', redirectTo: 'listproducts' },
      ],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProductsRoutingModule {}