import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { Map1Component } from './map1/map1.component';
import { Map2Component } from './map2/map2.component';
import { SearchedMapComponent } from './searched-map/searched-map.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'map1', component: Map1Component},
  {path: 'map2', component: Map2Component},
  {path: 'searchMap', component: SearchedMapComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
