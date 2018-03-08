import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
import { RouterModule } from '@angular/router';
import { SettingsRoutingModule } from './settings-routing.module';
import { DeleteAccountComponent } from './settings/components/delete-account/delete-account.component';
import { ModalsModule } from '../modals/modals.module';
@NgModule({
  imports: [
    CommonModule
    , MaterialImportsModule
    , RouterModule
    , SettingsRoutingModule
    , ModalsModule
  ],
  declarations: [SettingsComponent, DeleteAccountComponent]
})
export class SettingsModule { }
