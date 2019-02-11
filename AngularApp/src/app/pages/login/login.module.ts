import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { 
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatDialogModule,
       } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { PopupComponent } from './popup/popup.component';


const routes: Routes = [
    {path: '', component: LoginComponent},
  ];
@NgModule({
    imports: [
        MatCardModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        RouterModule.forChild(routes)
    ],
    declarations: [   
        LoginComponent,PopupComponent,
    ],
    exports: [
        RouterModule
    ],
    entryComponents:[
        PopupComponent,
    ],
    providers: [
    ]
})
export class LoginModule {
}
