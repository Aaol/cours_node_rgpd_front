import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { MapComponent } from './Components/map/map.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  , { path: 'register', component: RegisterComponent }
  , { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule'}
  , { path: 'footer', loadChildren: 'app/footer/footer.module#FooterModule' }
  , { path: 'map', component: MapComponent }
  , {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
