import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { AccountComponent } from './account/account.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatTabsModule
  ]
})
export class FeaturesModule { }
