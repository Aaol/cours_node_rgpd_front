import { NgModule } from '@angular/core';
import {
  MatToolbarModule
  , MatButtonModule
  , MatDialogModule
  , MatInputModule
  , MatGridListModule
  , MatCardModule
  , MatCheckboxModule
  , MatSidenavModule
  , MatTabsModule
} from '@angular/material';
@NgModule({
  imports: [
    MatToolbarModule
    , MatDialogModule
    , MatGridListModule
    , MatCheckboxModule
    , MatSidenavModule
    , MatCardModule
    , MatInputModule
    , MatTabsModule
    , MatButtonModule
  ],
  exports: [
    MatToolbarModule
    , MatCheckboxModule
    , MatDialogModule
    , MatInputModule
    , MatSidenavModule
    , MatGridListModule
    , MatCardModule
    , MatTabsModule
    , MatButtonModule
  ],
  declarations: []
})
export class MaterialImportsModule { }
