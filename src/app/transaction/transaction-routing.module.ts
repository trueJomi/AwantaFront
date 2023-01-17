import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';
import { TransactionDatailComponent } from './components/transaction-datail/transaction-datail.component';

const routes: Routes = [
  {
    path:'list-transacctions',
    component:ListTransactionsComponent,
    children:[
      {
        path:':id',
        component:TransactionDatailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
