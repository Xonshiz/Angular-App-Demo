import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartjsComponent } from './chartjs/chartjs.component';
const chartRoutes: Routes = [
	{ path: 'chartjs', component: ChartjsComponent ,data: { animation: 'chartjs' }}
];

@NgModule({
	imports: [
		RouterModule.forChild(chartRoutes),
		
	],
	exports: [
		RouterModule
	]
})
export class ChartsRouterModule { }