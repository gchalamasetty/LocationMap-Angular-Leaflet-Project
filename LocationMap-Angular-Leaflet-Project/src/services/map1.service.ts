import { Injectable, ChangeDetectorRef } from '@angular/core';
import { latLng, tileLayer, marker, icon, Layer, circle, polyline } from 'leaflet';
import { HttpClient } from '@angular/common/http';
import { MapDefaultCordinates, LayersForMap } from '../Models/map.model';


@Injectable()
export class Map1Service {

    hqLayer: Layer[];
    defaultMap1Lat: number = MapDefaultCordinates.map1Latitude;
    defaultMap1Long: number = MapDefaultCordinates.map1Longitude;
    mapOptions: any;
    layersControlOptions: any;
    map1Markers: any;
    routeMap: any;
    // getting Layers and coordinates from model
    layer1 = LayersForMap.layer1;
    layer2 = LayersForMap.layer2;
    hqLat = MapDefaultCordinates.worldBankHQLat;
    hqLong = MapDefaultCordinates.worldBankHQLong;
    iadLat = MapDefaultCordinates.iadLat;
    iadLong = MapDefaultCordinates.iadLong;

    constructor(private _http: HttpClient) { }

    // function to mark the headquarters of WB
    getMarkersMap1() {
        this.map1Markers =
            marker([this.hqLat, this.hqLong], {
                icon: icon({
                    iconSize: [25, 41],
                    iconAnchor: [13, 41],
                    iconUrl: '../assets/marker-icon.png',
                    shadowUrl: '../assets/marker-shadow.png'
                })
            });
        return this.map1Markers
    }

    // Defining layers
    getLayerControlsMap1() {
        this.layersControlOptions = {
            baseLayers: {
                'Open Street Maps': this.layer1,
                'Wiki Media Maps': this.layer2
            },
            overlays: {
                'The World Bank Headquarters': this.getMarkersMap1()
            }
        };
        return this.layersControlOptions;
    }
   //adding layers [layerOptions] to WB HQ 
    getHeadQuartersLayer() {
        this.hqLayer = [
            circle([this.hqLat, this.hqLong], { radius: 500 }),
            marker([this.hqLat, this.hqLong], {
                icon: icon({
                    iconSize: [25, 41],
                    iconAnchor: [13, 41],
                    iconUrl: '../assets/marker-icon.png',
                    shadowUrl: '../assets/marker-shadow.png'
                })
            }),
        ];
        return (this.hqLayer);
    }

    // Mark the start and End destination of the Route
    getRouteMap() {
        this.routeMap = [
            marker([this.hqLat, this.hqLong], {
                icon: icon({
                    iconSize: [25, 41],
                    iconAnchor: [13, 41],
                    iconUrl: '../assets/marker-icon.png',
                    shadowUrl: '../assets/marker-shadow.png'
                })
            }),
            marker([this.iadLat, this.iadLong], {
                icon: icon({
                    iconSize: [25, 41],
                    iconAnchor: [13, 41],
                    iconUrl: '../assets/marker-icon.png',
                    shadowUrl: '../assets/marker-shadow.png'
                })
            })
        ];
        return (this.routeMap);
    }

    // All options for displaying Map 1
    map1Options(lat: number, long: number) {
        this.mapOptions = {
            layers: [
                this.layer1,
                this.layer2,
            ],
            zoom: 14,
            center: latLng(lat, long),
        };
        console.log("map1Options", this.mapOptions);
        return this.mapOptions;
    }

}