import { NgModule } from '@angular/core';
import {
  MatToolbarModule
  , MatButtonModule
  , MatDialogModule
  , MatInputModule
  , MatGridListModule
  , MatCardModule
  , MatCheckboxModule
} from '@angular/material';
@NgModule({
  imports: [
    MatToolbarModule
    , MatDialogModule
    , MatGridListModule
    , MatCheckboxModule
    , MatCardModule
    , MatInputModule
    , MatButtonModule
  ],
  exports: [
    MatToolbarModule
    , MatCheckboxModule
    , MatDialogModule
    , MatInputModule
    , MatGridListModule
    , MatCardModule
    , MatButtonModule
  ],
  declarations: []
})
export class MaterialImportsModule { }
