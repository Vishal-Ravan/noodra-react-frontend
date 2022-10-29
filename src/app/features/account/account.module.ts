import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { SettingComponent } from './setting/setting.component';
import { AdresseComponent } from './setting/adresse/adresse.component';
import { CompteComponent } from './setting/compte/compte.component';
import { AdressBillingComponent } from './setting/adresse/adress-billing/adress-billing.component';
import { AdressDeleveryComponent } from './setting/adresse/adress-delevery/adress-delevery.component';
import { AdressOtherComponent } from './setting/adresse/adress-other/adress-other.component';
import { EditEmailComponent } from './setting/compte/edit-email/edit-email.component';
import { EditPasswordComponent } from './setting/compte/edit-password/edit-password.component';
import { InfoCompteComponent } from './setting/compte/info-compte/info-compte.component';
import { WalletComponent } from './wallet/wallet.component';
import { CommandeComponent } from './commande/commande.component';
import { DetailCommandComponent } from './commande/detail-command/detail-command.component';
import { LitigesComponent } from './commande/litiges/litiges.component';
import { LitigesFormComponent } from './commande/litiges/litiges-form/litiges-form.component';
import { CreditWalletComponent } from './wallet/credit-wallet/credit-wallet.component';
import { TransactionComponent } from './wallet/transaction/transaction.component';
import { TransfertComponent } from './wallet/transfert/transfert.component';
import { AccountTransfertComponent } from './wallet/transfert/account-transfert/account-transfert.component';
import { EventTransfertComponent } from './wallet/transfert/event-transfert/event-transfert.component';
import { MakeTransfertComponent } from './wallet/transfert/make-transfert/make-transfert.component';
import { AmountCreditComponent } from './wallet/credit-wallet/amount-credit/amount-credit.component';
import { CreditByCardComponent } from './wallet/credit-wallet/credit-by-card/credit-by-card.component';


@NgModule({
  declarations: [
    SettingComponent,
    AdresseComponent,
    CompteComponent,
    AdressBillingComponent,
    AdressDeleveryComponent,
    AdressOtherComponent,
    EditEmailComponent,
    EditPasswordComponent,
    InfoCompteComponent,
    WalletComponent,
    CommandeComponent,
    DetailCommandComponent,
    LitigesComponent,
    LitigesFormComponent,
    CreditWalletComponent,
    TransactionComponent,
    TransfertComponent,
    AccountTransfertComponent,
    EventTransfertComponent,
    MakeTransfertComponent,
    AmountCreditComponent,
    CreditByCardComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
