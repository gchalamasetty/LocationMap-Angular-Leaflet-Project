import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { Map1Component } from './map1/map1.component';
import { Map2Component } from './map2/map2.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { Map1Service } from '../services/map1.service';
import { Map2Service } from '../services/map2.service';
import { SearchedMapComponent } from './searched-map/searched-map.component';
import { SearchMapService } from '../services/searchMap.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    Map1Component,
    Map2Component,
    SearchedMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LeafletModule.forRoot()
  ],
  providers: [Map1Service, Map2Service, SearchMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
