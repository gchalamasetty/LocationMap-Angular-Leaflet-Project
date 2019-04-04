import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  welcomeTitle: string = 'Welcome to Angular-Leaflet Application';

  constructor() { }

  ngOnInit() {
  }

}
