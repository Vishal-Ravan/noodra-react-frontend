import { transition } from '@angular/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './features/account/account.component';
import { CommandeComponent } from './features/account/commande/commande.component';
import { DetailCommandComponent } from './features/account/commande/detail-command/detail-command.component';
import { LitigesFormComponent } from './features/account/commande/litiges/litiges-form/litiges-form.component';
import { LitigesComponent } from './features/account/commande/litiges/litiges.component';
import { AdressBillingComponent } from './features/account/setting/adresse/adress-billing/adress-billing.component';
import { AdressDeleveryComponent } from './features/account/setting/adresse/adress-delevery/adress-delevery.component';
import { AdressOtherComponent } from './features/account/setting/adresse/adress-other/adress-other.component';
import { AdresseComponent } from './features/account/setting/adresse/adresse.component';
import { CompteComponent } from './features/account/setting/compte/compte.component';
import { EditEmailComponent } from './features/account/setting/compte/edit-email/edit-email.component';
import { EditPasswordComponent } from './features/account/setting/compte/edit-password/edit-password.component';
import { InfoCompteComponent } from './features/account/setting/compte/info-compte/info-compte.component';
import { SettingComponent } from './features/account/setting/setting.component';
import { AmountCreditComponent } from './features/account/wallet/credit-wallet/amount-credit/amount-credit.component';
import { CreditByCardComponent } from './features/account/wallet/credit-wallet/credit-by-card/credit-by-card.component';
import { CreditWalletComponent } from './features/account/wallet/credit-wallet/credit-wallet.component';
import { TransactionComponent } from './features/account/wallet/transaction/transaction.component';
import { AccountTransfertComponent } from './features/account/wallet/transfert/account-transfert/account-transfert.component';
import { EventTransfertComponent } from './features/account/wallet/transfert/event-transfert/event-transfert.component';
import { MakeTransfertComponent } from './features/account/wallet/transfert/make-transfert/make-transfert.component';
import { TransfertComponent } from './features/account/wallet/transfert/transfert.component';
import { WalletComponent } from './features/account/wallet/wallet.component';
import { CreationBotiqueComponent } from './features/creation-botique/creation-botique.component';
import { OpenShopComponent } from './features/creation-botique/open-shop/open-shop.component';
import { FeaturesComponent } from './features/features.component';
import { HistoryComponent } from './features/history/history.component';
import { ConversationComponent } from './features/messages/conversation/conversation.component';
import { WriteConversationComponent } from './features/messages/conversation/write-conversation/write-conversation.component';
import { ListProfilesComponent } from './features/messages/list-profiles/list-profiles.component';
import { ProfileComponent } from './features/messages/list-profiles/profile/profile.component';
import { SearchProfileComponent } from './features/messages/list-profiles/search-profile/search-profile.component';
import { MessagesComponent } from './features/messages/messages.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { ForgetPasswordComponent } from './shared/components/forget-password/forget-password.component';
import { CategoriesComponent } from './shared/components/header/categories/categories.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginOrRegisterComponent } from './shared/components/login-or-register/login-or-register.component';

const routes: Routes = [


  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: OpenShopComponent },
  { path: 'wishlist', component: WishlistComponent },
  // {path: 'features', component: FeaturesComponent},
  { path: 'historie', component: HistoryComponent },
  { path: 'boutique', component: CreationBotiqueComponent },
  {
    path: 'account', component: AccountComponent, children: [
      {
        path: 'setting', component: SettingComponent, children: [{
          path: 'compte', component: CompteComponent, children: [{
            path: 'compte1', component: EditPasswordComponent
          },
          { path: 'compte2', component: EditEmailComponent },
          { path: 'compte2', component: InfoCompteComponent }
          ]
        },
        {
          path: 'adresse', component: AdresseComponent, children: [
            { path: 'billing', component: AdressBillingComponent },
            { path: 'delevery', component: AdressDeleveryComponent },
            { path: 'other', component: AdressOtherComponent }
          ]
        },

        ]
      },
      {
        path: 'Commande', component: CommandeComponent, children: [
          { path: 'commandes', component: DetailCommandComponent },
          {
            path: 'litiges', component: LitigesComponent, children: [
              { path: 'litigesform', component: LitigesFormComponent }
            ]
          }
        ]
      }]
  },
  {
    path: 'messages', component: MessagesComponent, children: [
      {
        path: 'messages/conversation', component: ConversationComponent, children: [{
          path: 'messages/conversation/write', component: WriteConversationComponent
        }]
      },
      {
        path: 'list-profiles', component: ListProfilesComponent, children: [{
          path: 'message/profile', component: ProfileComponent
        },
        { path: 'search-profile', component: SearchProfileComponent }]
      }
    ]
  },
  {
    path: 'wallet', component: WalletComponent, children: [
      {
        path: 'wallet-credit', component: CreditWalletComponent, children: [
          {
            path: 'wallet-amount-credit', component: AmountCreditComponent
          },
          {
            path: 'wallet-card-credit', component: CreditByCardComponent
          }
        ]
      },
      {
        path: 'wallet-transaction', component: TransactionComponent
      },
      {
        path: 'wallet-transfert', component: TransfertComponent, children: [
          {
            path: 'wallet-account-transfert', component: AccountTransfertComponent
          },
          {
            path: 'wallet-event-transfert', component: EventTransfertComponent
          },
          {
            path: 'wallet-make-transfert', component: MakeTransfertComponent

          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, OpenShopComponent, WishlistComponent, AccountComponent, SettingComponent, CompteComponent, AdresseComponent, EditPasswordComponent, EditEmailComponent, InfoCompteComponent, AdressBillingComponent, AdressDeleveryComponent, AdressOtherComponent, CommandeComponent, DetailCommandComponent, LitigesComponent, LitigesFormComponent, HistoryComponent, WalletComponent, TransactionComponent, TransfertComponent, CreditWalletComponent, AccountTransfertComponent, EventTransfertComponent, MakeTransfertComponent, CreditByCardComponent, AmountCreditComponent, MessagesComponent, ConversationComponent, WriteConversationComponent, ListProfilesComponent, ProfileComponent, SearchProfileComponent, CreationBotiqueComponent]
