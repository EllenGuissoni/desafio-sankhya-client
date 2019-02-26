import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class FinancasService {
    constructor(
        private http: HttpClient
    ) {
    }

    getFinancas() {
        return this.http.get<any>(`${environment.apiUrl}/transactions`);
    }

    createFinanca(transaction: any) {
        return this.http.post<any>(`${environment.apiUrl}/transactions`, transaction);
    }

    deleteFinancaPorId(id: number) {
        return this.http.delete<any>(`${environment.apiUrl}/transactions/${id}`);
    }
}