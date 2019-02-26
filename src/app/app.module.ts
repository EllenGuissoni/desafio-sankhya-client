import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { DemoMaterialModule } from './../material-module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from '../app/core/core.module';



@NgModule({
	declarations: [
		AppComponent,
		CadastrarComponent,
		ContentComponent,
		FooterComponent,
		HeaderComponent
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		ChartsModule,
		CommonModule,
		CurrencyMaskModule,
		DemoMaterialModule,
		FontAwesomeModule,
		FormsModule,
		HttpClientModule,
		MatIconModule,
		MatNativeDateModule,
		ReactiveFormsModule,
		CoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
