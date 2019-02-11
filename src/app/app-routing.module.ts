import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'hero-list', pathMatch: 'full' },
  { path: 'hero-list', loadChildren: './hero-list/hero-list.module#HeroListPageModule' },
  { path: 'hero-detail/:id', loadChildren: './hero-detail/hero-detail.module#HeroDetailPageModule' },  { path: 'qr-scanner', loadChildren: './qr-scanner/qr-scanner.module#QrScannerPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
