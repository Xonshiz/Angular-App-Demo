import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { Routes, RouterModule } from '@angular/router';
import { ChartsRouterModule } from './charts.router';

import { ChartjsModule } from './chartjs/chartjs.module';


@NgModule({
  imports: [
    CommonModule,
    ChartsRouterModule,
    FlexLayoutModule,
    ChartjsModule
  ],
  declarations: []
})
export class ChartsModule { }
