import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SearchemployeeComponent } from './EmployeeManagement/searchemployee/searchemployee.component';
import { AddemployeeComponent } from './EmployeeManagement/addemployee/addemployee.component';
import { AddprojectComponent } from './ProjectManagement/addproject/addproject.component';
import { ImportemployeeComponent } from './EmployeeManagement/importemployee/importemployee.component';
import { UploadcvComponent } from './EmployeeManagement/uploadcv/uploadcv.component';
import { UploaddlComponent } from './EmployeeManagement/uploaddl/uploaddl.component';
import { UploadsowComponent } from './ProjectManagement/uploadsow/uploadsow.component';
import { SearchprojectComponent } from './ProjectManagement/searchproject/searchproject.component';
import { AddclientComponent} from './ProjectManagement/addclient/addclient.component';
import { from } from 'rxjs';

 

const pagesRoutes: Routes = [
    { path: 'services', component: ServicesComponent ,data: { animation: 'services' }},
    {path: 'searchemployee', component:SearchemployeeComponent},
    { path: 'addemployee', component:AddemployeeComponent},
    { path: 'addproject', component:AddprojectComponent},
    { path: 'searchproject', component:SearchprojectComponent},
    { path: 'importemployee', component:ImportemployeeComponent},
    { path: 'uploadcv', component:UploadcvComponent},
    { path: 'uploaddl', component:UploaddlComponent},
    { path: 'uploadsow', component:UploadsowComponent},
    { path: 'addclient', component:AddclientComponent}
    
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