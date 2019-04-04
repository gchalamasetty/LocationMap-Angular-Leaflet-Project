export const MapDefaultCordinates ={
    map1Latitude: 38.895990,
    map1Longitude: -77.043470,
    map2Latitude: 51.491970,
    map2Longitude: -0.125520,
    worldBankHQLat: 38.899187,
    worldBankHQLong: -77.0427908,
    iadLat: 38.9522097,
    iadLong:-77.4534242937754,

}

import { tileLayer } from 'leaflet';
export const LayersForMap = {
    layer1 : tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    layer2 : tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
}





