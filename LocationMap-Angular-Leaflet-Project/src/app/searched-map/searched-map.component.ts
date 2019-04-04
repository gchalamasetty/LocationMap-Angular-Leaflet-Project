import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { SearchMapService } from '../../services/searchMap.service';
import { ActivatedRoute } from '@angular/router';
import { latLng, tileLayer, marker, icon } from 'leaflet';
import { Map1Service } from '../../services/map1.service';
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

@Component({
  selector: 'app-searched-map',
  templateUrl: './searched-map.component.html',
  styleUrls: ['./searched-map.component.css']
})
export class SearchedMapComponent implements OnInit {

  markedLayers: boolean;
  showSearchMap: boolean;
  @Input() latitude: string;
  @Input() longitude: string;
  searchMapOptions: any;
  searchMapLayersControl: any;


  constructor(private searchMapService: SearchMapService, private cdr: ChangeDetectorRef, private _route: ActivatedRoute) { }

  ngOnInit() {
    // reading query params from new activateroute
      let searchLat = Number(this._route.snapshot.queryParams.lat);
      let searchLong = Number(this._route.snapshot.queryParams.long);
      // Map options
      this.searchMapLayersControl = this.searchMapService.layerOptionsSearchMap(searchLat, searchLong);
      this.searchMapOptions = this.searchMapService.searchOptions(searchLat, searchLong);
      this.showSearchMap = true;
  }
}
