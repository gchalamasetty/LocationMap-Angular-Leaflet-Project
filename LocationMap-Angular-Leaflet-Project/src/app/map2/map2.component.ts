import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Map2Service } from '../../services/map2.service';

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css']
})
export class Map2Component implements OnInit {
  map2options = null;
  constructor(private _map2Service: Map2Service, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  this.map2options = this._map2Service.options;
  }


}
