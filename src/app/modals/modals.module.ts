import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './validation/validation.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';
@NgModule({
  imports: [
    CommonModule
    , MaterialImportsModule
  ]
  , declarations: [
    ValidationComponent
  ]
  , exports: [
    ValidationComponent
  ]
  , entryComponents: [
    ValidationComponent
  ]
})
export class ModalsModule { }
