import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private issIcon = L.icon({
    iconUrl: 'assets/iss-icon.png', // Vous devrez fournir une image pour l'icône de l'ISS
    iconSize: [50, 50],
    iconAnchor: [25, 25]
  });

  private initMap(): void {
    this.map = L.map('map', {
      center: [0, 0],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    // Ajout de l'icône de l'ISS à la carte
    const issMarker = L.marker([0, 0], { icon: this.issIcon }).addTo(this.map);

    // Récupération des données de localisation de l'ISS en temps réel toutes les secondes
    setInterval(() => {
      fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())
        .then(data => {
          const { latitude, longitude } = data;
          issMarker.setLatLng([latitude, longitude]);
          this.map.setView([latitude, longitude]);
        })
        .catch(error => console.error('Error fetching ISS data:', error));
    }, 1000);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
