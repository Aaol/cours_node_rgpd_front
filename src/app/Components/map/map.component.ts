import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, MapOptions } from 'leaflet';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public options: MapOptions;
  constructor() {
    this.options = {
      layers: [
        tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          detectRetina: true
        })
      ],
      zoom: 15,
      center: latLng([ 46.879966, -121.726909 ])
    };
  }

  ngOnInit() {
  }

}
