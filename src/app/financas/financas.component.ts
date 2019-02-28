import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinancasService } from './financas.service';
import { first } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.css']
})
export class FinancasComponent implements OnInit {
  financas: any[] = [];
  form: FormGroup;

  constructor(
    private financaService: FinancasService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      descricao: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      vencimento: ['', [Validators.required]],
      valor: ['', [Validators.required]]
    });

    this.carregarFinancas();
  }

  salvar() {
    if (!this.form.valid) {
      return;
    }

    const financa = this.form.value;
    financa.vencimento = this.converteData(financa.vencimento);

    this.financaService.criarFinanca(this.form.value)
      .subscribe((data: any) => this.carregarFinancas());
  }

  deletarFinanca(financa: any) {
    this.financaService.deletarFinancaPeloId(financa.id)
      .subscribe((data: any) => this.carregarFinancas());
  }

  formatTotalFinacas(financa: any) {
    let prefix = '';
    let className = 'text-success';

    if (this.isDespesa(financa)) {
      prefix = '- ';
      className = 'text-danger';
    }

    return `<span class="${className}">${prefix}${financa.valor}</span>`;
  }

  isReceita(financa: any) {
    return financa.tipo === 'RECEITA';
  }

  isDespesa(financa: any) {
    return financa.tipo === 'DESPESA';
  }

  getSeriesGrafico() {
    const chartLabel = [];

    chartLabel.push('Receita');
    chartLabel.push('Despesa');

    return chartLabel;
  }

  getTipoGrafico() {
    return 'pie';
  }

  getDadosGrafico() {
    const chartData = [];

    chartData.push(this.getTotalReceita());
    chartData.push(this.getTotalDespesa());

    return chartData;
  }

  private carregarFinancas() {
    this.financaService.getFinancas()
      .pipe(first())
      .subscribe((data: any) => {
        this.financas = data;
      });
  }

  private converteData(date: string) {
    return moment(date, 'DDMMYYYY').format('YYYY-MM-DD');
  }

  private getTotalReceita() {
    let total = 0;

    if (this.financas.length) {
      for (let i = 0; i < this.financas.length; i++) {
        if (this.isReceita(this.financas[i])) {
          total += this.financas[i].vencimento;
        }
      }
    }

    return total;
  }

  private getTotalDespesa() {
    let total = 0;

    if (this.financas.length) {
      for (let i = 0; i < this.financas.length; i++) {
        if (this.isDespesa(this.financas[i])) {
          total += this.financas[i].vencimento;
        }
      }
    }

    return total;
  }
}
