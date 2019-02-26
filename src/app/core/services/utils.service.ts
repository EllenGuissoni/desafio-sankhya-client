import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class UtilsService {
    constructor(
        private currency: CurrencyPipe
    ) {
    }

    moneyFormat(value: number, currencyCode: string = 'BRL') {
        return this.currency.transform(value, currencyCode);
    }

    dateFormat(date, format: string = 'DD/MM/YYYY HH:mm:ss') {
        return moment(date).format(format);
    }
}