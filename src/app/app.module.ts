import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MomentModule } from 'ngx-moment';
import { FinancasComponent } from './financas/financas.component';
import { FinancasService } from './financas/financas.service';

@NgModule({
  declarations: [
    AppComponent,
    FinancasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MomentModule
  ],
  providers: [
    FinancasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
