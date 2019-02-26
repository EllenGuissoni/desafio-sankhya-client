import { Component, OnInit } from '@angular/core';
import {first} from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';	

import { FinancasService } from '../core/services/financas.service';

@Component({
	selector: 'app-cadastrar',
	templateUrl: './cadastrar.component.html',
	styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

	form: FormGroup;
	submitted = false;

	tipos = ['DESPESA', 'RECEITA'];

	financas: any[] = [];

	constructor(
		private fb: FormBuilder,
		private financasService: FinancasService
	) {}
	
	ngOnInit(): void {
        this.form = this.fb.group({
            description: ['', [Validators.required]],
            type: ['DESPESA', [Validators.required]],
            date: [this.dateFormat(), [Validators.required]],
            total: ['', [Validators.required]]
        });
	}

	onSubmit() {

		if (!this.form.valid) {
            return;
        }

        const formData = this.form.value;
        formData.date = this.normalizeDate(formData.date);

    //    formData.result.then((result) => {
    //         this.financasService.createFinanca(result)
    //             .subscribe((data: any) => this.loadTransactions());
    //     }).catch((reason: any) => {

    //     });


		this.submitted = true;
	}

	private loadTransactions() {
        this.financasService.getFinancas()
            .pipe(first())
            .subscribe((data: any) => {
                this.financas = data;
            });
    }

	private dateFormat() {
        return moment().format('DD/MM/YYYY');
    }

    private normalizeDate(date: string) {
        return moment(date, 'DDMMYYYY').format('YYYY-MM-DD');
    }

}
