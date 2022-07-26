import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EasterEggComponent } from './easter-egg/easter-egg.component';
import { HomeComponent } from './home/home.component';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';
import { HistoriaComponent } from './historia/historia.component';
import { ItemsComponent } from './items/items.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'easter-egg', component: EasterEggComponent },
  { path: 'pokemon', component: PokemonGridComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'pokemon/:name', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
