import { Injectable } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { MapDefaultCordinates } from '../Models/map.model';

@Injectable()
export class Map2Service {

    defaultMap2Lat: number = MapDefaultCordinates.map2Latitude;
    defaultMap2Long: number = MapDefaultCordinates.map2Longitude;
constructor(private _http: HttpClient) { }

options = {
    layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        })
    ],
    zoom: 7,
    center: latLng(this.defaultMap2Lat, this.defaultMap2Long)
  };

}