import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompraComponent } from './pages/new-compra/new-compra.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'newcompra', component: NewCompraComponent },      
      //{ path: 'updateaffiliate/:id', component: NewAffiliateComponent },
      { path: '**', redirectTo: 'newcompra' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
