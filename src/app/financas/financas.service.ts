import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class FinancasService {
  constructor(private http: HttpClient) { }

  getFinancas() {
    return this.http.get<any>(`${environment.apiUrl}/lancamentos`);
  }

  criarFinanca(financa: any) {
    return this.http.post<any>(`${environment.apiUrl}/lancamentos`, financa);
  }

  salvarFinanca(id: number, financa: any) {
    return this.http.put<any>(`${environment.apiUrl}/lancamentos/${id}`, financa);
  }

  deletarFinancaPeloId(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/lancamentos/${id}`);
  }
}
