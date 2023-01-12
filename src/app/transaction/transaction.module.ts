import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';
import { TransactionDatailComponent } from './components/transaction-datail/transaction-datail.component';


@NgModule({
  declarations: [
    TransactionComponent,
    ListTransactionsComponent,
    TransactionDatailComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
