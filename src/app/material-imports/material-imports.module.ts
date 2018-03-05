import { NgModule } from '@angular/core';
import {
  MatToolbarModule
  , MatButtonModule
  , MatDialogModule
  , MatInputModule
  , MatGridListModule
  , MatCardModule
} from '@angular/material';
@NgModule({
  imports: [
    MatToolbarModule
    , MatDialogModule
    , MatGridListModule
    , MatCardModule
    , MatInputModule
    , MatButtonModule
  ],
  exports: [
    MatToolbarModule
    , MatDialogModule
    , MatInputModule
    , MatGridListModule
    , MatCardModule
    , MatButtonModule
  ],
  declarations: []
})
export class MaterialImportsModule { }
