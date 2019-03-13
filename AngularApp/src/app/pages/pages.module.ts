import { NgModule } from '@angular/core';
import { 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatStepperModule,
        MatCheckboxModule,
        MatListModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
       } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRouterModule } from './pages.routes';
import { ServicesComponent } from './services/services.component';
import { CoreModule } from '../core/core.module';
import {SearchemployeeComponent } from './EmployeeManagement/searchemployee/searchemployee.component';
import { AddemployeeComponent } from './EmployeeManagement/addemployee/addemployee.component';
import { ImportemployeeComponent } from './EmployeeManagement/importemployee/importemployee.component';
import { UploadcvComponent } from './EmployeeManagement/uploadcv/uploadcv.component';
import { UploaddlComponent } from './EmployeeManagement/uploaddl/uploaddl.component';
import { AddprojectComponent } from './ProjectManagement/addproject/addproject.component';
import { UploadsowComponent } from './ProjectManagement/uploadsow/uploadsow.component';
import { AddclientComponent } from './ProjectManagement/addclient/addclient.component';
import { SearchprojectComponent } from './ProjectManagement/searchproject/searchproject.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        MatChipsModule,
        CoreModule,
        MatStepperModule,
        FormsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatRadioModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        PagesRouterModule ],
    declarations: [   
        ServicesComponent, SearchemployeeComponent,
         AddemployeeComponent, ImportemployeeComponent,
          UploadcvComponent, UploaddlComponent, SearchprojectComponent, 
          AddprojectComponent, AddclientComponent, UploadsowComponent,
    ],
    exports: [
    ],
    providers: [
    ]
})
export class PagesModule {
}
