import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddclientComponent} from './addclient/addclient.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ImportemployeeComponent } from './importemployee/importemployee.component';
import { UploadcvComponent } from './uploadcv/uploadcv.component';
import { UploaddlComponent } from './uploaddl/uploaddl.component';
import { UploadsowComponent } from './uploadsow/uploadsow.component';
import { SearchprojectComponent } from './searchproject/searchproject.component';

 

const pagesRoutes: Routes = [
    { path: 'services', component: ServicesComponent ,data: { animation: 'services' }},
    {path: 'searchemployee', component:SearchemployeeComponent},
    { path: 'addemployee', component:AddemployeeComponent},
    { path: 'addclient', component:AddclientComponent},
    { path: 'addproject', component:AddprojectComponent},
    { path: 'searchproject', component:SearchprojectComponent},
    { path: 'importemployee', component:ImportemployeeComponent},
    { path: 'uploadcv', component:UploadcvComponent},
    { path: 'uploaddl', component:UploaddlComponent},
    { path: 'uploadsow', component:UploadsowComponent}
    
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