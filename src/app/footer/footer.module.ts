import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CguComponent } from './cgu/cgu.component';
import { FooterRoutingModule } from './footer-routing.module';

@NgModule({
  imports: [
    CommonModule
    , FooterRoutingModule
  ],
  declarations: [CguComponent],
  providers: [
  ]
})
export class FooterModule { }
