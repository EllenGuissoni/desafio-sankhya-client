import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { FinancasService } from '../core/services/financas.service';
import { UtilsService } from '../core/services/utils.service';

export interface Financeiro {
	id: number;
	descricao: string;
	vencimento: string;
	valor: number;
	tipo: string;
}

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

	public pieChartLabels: string[] = ['Despesas', 'Receita'];
	public pieChartData: number[] = [1290.60, 2500];
	public pieChartType: string = 'pie';

	financas: any[] = [];

	displayedColumns: string[] = ['id', 'descricao', 'vencimento', 'valor', 'excluir'];

	// calculos_financeiros: Financeiro[] = [
	// 	{ id: 1, descricao: 'Lorem ipsum dolor sit amett', vencimento: '2019-02-07', valor: 2500.00, tipo: 'RECEITA' },
	// 	{ id: 2, descricao: 'Aluguel', vencimento: '2019-02-08', valor: 650.00, tipo: 'DESPESA' },
	// 	{ id: 3, descricao: 'Condomínio', vencimento: '2019-02-08', valor: 180.00, tipo: 'DESPESA' },
	// 	{ id: 4, descricao: 'CEMIG', vencimento: '2019-02-08', valor: 110.60, tipo: 'DESPESA' },
	// 	{ id: 5, descricao: 'Internet, TV e Telefone', vencimento: '2019-02-08', valor: 250.00, tipo: 'DESPESA' },
	// 	{ id: 6, descricao: 'Gasolina', vencimento: '2019-02-08', valor: 100.00, tipo: 'DESPESA' },
	// ];

	constructor(
        private utilsService: UtilsService,
        private financasService: FinancasService
    ) {
    }

    ngOnInit() {
        this.carregarFinancas();
    }

    deletarFinanca(financa: any) {
        this.financasService.deleteFinancaPorId(financa.id)
            .subscribe((data: any) => this.carregarFinancas());
    }

    verificaRenda(financa: any) {
        return financa.type === 'REVENUE';
    }

    verificaDespesa(financa: any) {
        return financa.type === 'EXPENSE';
    }

    formatTotalTransaction(transaction: any) {
        let prefix = '';
        let className = 'text-success';

        if (this.verificaDespesa(transaction)) {
            prefix = '- ';
            className = 'text-danger';
        }

        return `<span class="${className}">${prefix}${this.utilsService.moneyFormat(transaction.total)}</span>`;
    }

    getChartLabel() {
        const chartLabel = [];

        chartLabel.push('Receita');
        chartLabel.push('Despesa');

        return chartLabel;
    }

    getChartType() {
        return 'pie';
    }

    getChartData() {
        const chartData = [];

        chartData.push(this.getTotalRevenue());
        chartData.push(this.getTotalExpense());

        return chartData;
    }

    private getTotalRevenue() {
        let total = 0;

        if (this.financas.length) {
            for (let i = 0; i < this.financas.length; i++) {
                if (this.verificaRenda(this.financas[i])) {
                    total += this.financas[i].total;
                }
            }
        }

        return total;
    }

    private getTotalExpense() {
        let total = 0;

        if (this.financas.length) {
            for (let i = 0; i < this.financas.length; i++) {
                if (this.verificaRenda(this.financas[i])) {
                    total += this.financas[i].total;
                }
            }
        }

        return total;
    }

    private carregarFinancas() {
        this.financasService.getFinancas()
            .pipe(first())
            .subscribe((data: any) => {
                this.financas = data;
            });
    }
}
