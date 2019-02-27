import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class FinancasService {
    constructor(
        private http: HttpClient
    ) {
    }

    buscarTodosOsLancamentos() {
        return this.http.get<any>(`${environment.apiUrl}/lancamentos`);
    }

    salvarLancamento(lancamento: any) {
        return this.http.post<any>(`${environment.apiUrl}/lancamentos`, lancamento);
    }

    deletarLancamentoPeloId(id: number) {
        return this.http.delete<any>(`${environment.apiUrl}/lancamentos/${id}`);
    }
}