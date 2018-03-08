import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CguComponent } from './cgu/cgu.component';

const routes: Routes = [
    { path: 'cgu', component: CguComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FooterRoutingModule { }
