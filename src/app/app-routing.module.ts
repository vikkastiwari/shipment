import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./modules/home/home.module').then( (m) => m.HomeModule)
	},
  	{
		path: 'shipment',
		loadChildren: () => import('./modules/shipment/shipment.module').then( (m) => m.ShipmentModule)
	},
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
