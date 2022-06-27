import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxEchartsModule } from 'ngx-echarts';
import { StatusGraphComponent } from './status-graph/status-graph.component';
import { DamageGraphComponent } from './damage-graph/damage-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusGraphComponent,
    DamageGraphComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
