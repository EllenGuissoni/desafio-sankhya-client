import { CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FinancasService } from '../cadastrar/financas.service';
import { UtilsService } from './services/utils.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        CurrencyPipe,
        UtilsService,
        FinancasService
    ]
})
export class CoreModule {
}