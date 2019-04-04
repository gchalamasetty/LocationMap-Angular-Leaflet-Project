import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Map1Service } from '../../services/map1.service';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { MapDefaultCordinates} from '../../Models/map.model';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { latLng, tileLayer, marker, icon, Layer, circle, polygon } from 'leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';


@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.css']
})
export class Map1Component implements OnInit {

  mapInstance: any;
  showHQLayer: boolean = false;
  showRouteMap: boolean = false;
  displayMap1: boolean;
  map1options: any;
  mapLayersControl: any;
  searchValueMap1: string;
  searchProvider = new OpenStreetMapProvider();
  defaultMap1Lat: number = MapDefaultCordinates.map1Latitude;
  defaultMap1Long: number = MapDefaultCordinates.map1Longitude;
  hqLayer: Layer[];
  routeLayers: Layer[];
  showRoutebyDeafult: boolean = false;

  constructor(private _map1Service: Map1Service, private cdr: ChangeDetectorRef,
    private router: Router, private activatedRoute: ActivatedRoute) { }



  ngOnInit() {
    // Map Options
    this.map1options = this._map1Service.map1Options(this.defaultMap1Lat, this.defaultMap1Long);
    this.mapLayersControl = this._map1Service.getLayerControlsMap1();
    this.hqLayer = this._map1Service.getHeadQuartersLayer();
    this.routeLayers = this._map1Service.getRouteMap();
    this.displayMap1 = true;
  }

  // Function to convert the search address to Latitude and Longitude
  searchAddress() {
    var newLat: any;
    var newLong: any;
    const results = this.searchProvider.search({ query: this.searchValueMap1 })
      .then(function (result) {
        newLong = result && result[0] && result[0].x ? (result[0].x) : this.defaultMap1Lat;
        newLat = result && result[0] && result[0].y ? (result[0].y) : this.defaultMap1Long;
        console.log('Map Address Search Result', result, newLat, newLong);
      });
    setTimeout(() => {
      this.navigateTonewSearchedLocation(newLat, newLong);
    }, 1000);
  }

  // Navigating to Search Map component with new Lat and Long
  navigateTonewSearchedLocation(lat, long) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "lat": lat,
        "long": long
      }
    };
    this.router.navigate(["/searchMap"], navigationExtras);
  }

  // Click function to locate headquarters
  locateHeadQuarters() {
    this.showHQLayer = !this.showHQLayer;
  }

  // Click function to view the route
  routeToHQ() {
    this.showRouteMap = true;
    let map = this.mapInstance;
      L.Routing.control({
        waypoints: [
            L.latLng(MapDefaultCordinates.worldBankHQLat, MapDefaultCordinates.worldBankHQLong),
            L.latLng(MapDefaultCordinates.iadLat, MapDefaultCordinates.iadLong)
        ],
        routeWhileDragging: true,
        itinerary: false
      }).addTo(map);
  }

  // Leaflet function, will called once the map view is loaded
  onMapReady(map: L.Map){
    this.mapInstance = map;
  }

}
