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
    , MatButtonModule
  ],
  declarations: []
})
export class MaterialImportsModule { }
