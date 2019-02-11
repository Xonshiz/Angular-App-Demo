import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';

// import { HeaderComponent } from "./Common/Header/Header.component";
// import { FooterComponent } from "./Common/Footer/Footer.component";



@NgModule({
  declarations: [
    AppComponent   
    // HeaderComponent,
    // FooterComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
