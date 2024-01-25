import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent, pathMatch: 'full' },
  { path: 'home', component: PortfolioComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'item/:id', component: ItemComponent, pathMatch: 'full' },
  { path: 'search/:termino', component: SearchComponent, pathMatch: 'full' },
  { path: '**', component: PortfolioComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
