import { Injectable } from '@angular/core';
import { latLng, tileLayer, marker, icon } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { MapDefaultCordinates, LayersForMap } from '../Models/map.model';
import L from 'leaflet';


@Injectable()
export class SearchMapService {

    searchMapOptions: any;
    searchMapLayerOptions: any;
    searchedLocationPoint: any;
    layer1 = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    layer2 = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    constructor(private _http: HttpClient) {}

    // Marker for searched location
    getMarkedLocation(lat, long) {
        this.searchedLocationPoint = marker([lat, long], {
            icon: icon({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: '../assets/marker-icon.png',
                shadowUrl: '../assets/marker-shadow.png'
            })
        });
        console.log("search Map Options :", this.searchedLocationPoint);
        return this.searchedLocationPoint;
    }

    //For controlling layers and overlays
    layerOptionsSearchMap(lat, long) {
        let markedLocation = this.getMarkedLocation(lat, long);
        this.searchMapLayerOptions = {
            baseLayers: {
                'Open Street Maps': this.layer1,
                'Wiki Media Maps': this.layer2
            },
            overlays: {
                'Searched Location': markedLocation
            }
        };
    }

    // Leaftlet all Options for Map display
    searchOptions(lat, long) {
        let markedLocation = this.getMarkedLocation(lat, long);
        this.searchMapOptions = {
            layers: [this.layer1, this.layer2, markedLocation
            ],
            zoom: 14,
            center: latLng(lat, long),
        };
        console.log('searchMapOptions', this.searchMapOptions)
        return this.searchMapOptions;
    }
}