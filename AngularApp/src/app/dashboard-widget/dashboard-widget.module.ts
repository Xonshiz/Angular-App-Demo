import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashcardComponent } from './dashcard/dashcard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule} from '@angular/material/chips';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { DoughnutGraphComponent } from './doughnut-graph/doughnut-graph.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { Ng2OdometerModule } from 'ng2-odometer';
import { RoundProgressModule } from 'angular-svg-round-progressbar';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    Ng2OdometerModule,
    RoundProgressModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
      DashcardComponent, 
      BarGraphComponent, 
      DoughnutGraphComponent, 
      ProfileCardComponent
    
      ],
  exports: [
      DashcardComponent, 
      BarGraphComponent, 
      DoughnutGraphComponent, 
      ProfileCardComponent
  ]
})
export class DashboardWidgetModule { }
