import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { Subscription } from 'rxjs';

import { FinancasService } from './financas.service';
import { Financa } from './financa';

@Component({
	selector: 'app-cadastrar',
	templateUrl: './cadastrar.component.html',
	styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

    financa: Financa;
    mensagemSucesso: any;
    mensagemError: any;
    inscricao: Subscription;

    salvar() {

        if (this.financa.descricao && this.financa.valor && this.financa.tipo) {
            this.inscricao = this.financaService.salvarLancamento(this.financa)
                .subscribe(
                    financa => {
                        this.mensagemSucesso = "Registro inserido com sucesso";
                        this.financa = new Financa();
                        this.mensagemError = "";
                    },
                    error => {
                        this.mensagemError = "Erro ao inserir registro";
                        this.mensagemSucesso = "";
                    }
                )
        }
        else {
            this.mensagemError = "Preencha todos os campos!";
            this.mensagemSucesso = "";
        }
    }

    constructor(private financaService: FinancasService, private router: Router) {

    }

    ngOnInit() {
        this.financa = new Financa();
        this.mensagemSucesso = "";
        this.mensagemError = "";
    }

    ngOnDestroy() {
        if (this.inscricao) {
            this.inscricao.unsubscribe();
        }
    }

    private normalizeDate(date: string) {
        return moment(date, 'DDMMYYYY').format('YYYY-MM-DD');
    }

}