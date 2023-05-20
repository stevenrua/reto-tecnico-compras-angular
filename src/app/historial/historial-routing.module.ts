import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenHistorialComponent } from './pages/gen-historial/gen-historial.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'genhistorial', component: GenHistorialComponent },      
      //{ path: 'updateaffiliate/:id', component: NewAffiliateComponent },
      { path: '**', redirectTo: 'genhistorial' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialRoutingModule { }
