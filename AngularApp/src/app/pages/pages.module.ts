import { NgModule } from '@angular/core';
import { 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
       } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRouterModule } from './pages.routes';
import { ServicesComponent } from './services/services.component';
import { CoreModule } from '../core/core.module';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ImportemployeeComponent } from './importemployee/importemployee.component';
import { UploadcvComponent } from './uploadcv/uploadcv.component';
import { UploaddlComponent } from './uploaddl/uploaddl.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { UploadsowComponent } from './uploadsow/uploadsow.component';
import { AddclientComponent } from './addclient/addclient.component';
import { SearchprojectComponent } from './searchproject/searchproject.component';

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
