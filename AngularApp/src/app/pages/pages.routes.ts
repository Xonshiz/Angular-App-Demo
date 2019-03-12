import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
const pagesRoutes: Routes = [
    { path: 'services', component: ServicesComponent ,data: { animation: 'services' }},
    {path: 'searchemployee', component:SearchemployeeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class PagesRouterModule {}