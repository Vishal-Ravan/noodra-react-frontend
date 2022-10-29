import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SharedComponent } from './shared/shared.component';
import { FeaturesComponent } from './features/features.component';
import { ModelsComponent } from './shared/models/models.component';
import { ComponentsComponent } from './shared/components/components.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CategoriesComponent } from './shared/components/header/categories/categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ModalSettingsComponent } from './shared/components/footer/modal-settings/modal-settings.component';
import { LoginOrRegisterComponent } from './shared/components/login-or-register/login-or-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationBotiqueComponent } from './features/creation-botique/creation-botique.component';
// import { OpenShopComponent } from './features/creation-botique/open-shop/open-shop.component';
import { ForgetPasswordComponent } from './shared/components/forget-password/forget-password.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { ArticlesWishlistComponent } from './features/wishlist/articles-wishlist/articles-wishlist.component';
import { StoreWishlistComponent } from './features/wishlist/store-wishlist/store-wishlist.component';
import { MessagesComponent } from './features/messages/messages.component';
import { ConversationComponent } from './features/messages/conversation/conversation.component';
import { WriteConversationComponent } from './features/messages/conversation/write-conversation/write-conversation.component';
import { ListProfilesComponent } from './features/messages/list-profiles/list-profiles.component';
import { ProfileComponent } from './features/messages/list-profiles/profile/profile.component';
import { SearchProfileComponent } from './features/messages/list-profiles/search-profile/search-profile.component';
import { HistoryComponent } from './features/history/history.component';
import { DetailShopComponent } from './features/creation-botique/detail-shop/detail-shop.component';
import { FirstSetpComponent } from './features/creation-botique/first-setp/first-setp.component';
import { SecondSetpComponent } from './features/creation-botique/second-setp/second-setp.component';
import { ThirdStepComponent } from './features/creation-botique/third-step/third-step.component';

import { AddressSecondStepComponent } from './features/creation-botique/second-setp/address-second-step/address-second-step.component';
import { AmbassadorSecondStepComponent } from './features/creation-botique/second-setp/ambassador-second-step/ambassador-second-step.component';
import { StoreSecondStepComponent } from './features/creation-botique/second-setp/store-second-step/store-second-step.component';
import { TermsSecondStepComponent } from './features/creation-botique/second-setp/terms-second-step/terms-second-step.component';
import { WalletSecondStepComponent } from './features/creation-botique/second-setp/wallet-second-step/wallet-second-step.component';
import { SingleCommandComponent } from './features/single-command/single-command.component';
import { WalletComponent } from './features/account/wallet/wallet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoryService } from './shared/services/category.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    FeaturesComponent,
    ModelsComponent,
    ComponentsComponent,
    HeaderComponent,
    CategoriesComponent,
    FooterComponent,
    ModalSettingsComponent,
    LoginOrRegisterComponent,
    CreationBotiqueComponent,
    ForgetPasswordComponent,
    ArticlesWishlistComponent,
    StoreWishlistComponent,
    MessagesComponent,
    ConversationComponent,
    WriteConversationComponent,
    ListProfilesComponent,
    ProfileComponent,
    SearchProfileComponent,
    HistoryComponent,
    DetailShopComponent,
    FirstSetpComponent,
    SecondSetpComponent,
    ThirdStepComponent,
    AddressSecondStepComponent,
    AmbassadorSecondStepComponent,
    StoreSecondStepComponent,
    TermsSecondStepComponent,
    WalletSecondStepComponent,
    SingleCommandComponent,
    WalletComponent,  
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    NgbModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRadioModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
