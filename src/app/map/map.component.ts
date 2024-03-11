import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private issIcon = L.icon({
    iconUrl: 'assets/iss-icon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
  });

  welcomeMessage: string = '';


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

    const issMarker = L.marker([0, 0], { icon: this.issIcon }).addTo(this.map);

    setInterval(() => {
      fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())
        .then(data => {
          const { latitude, longitude } = data;
          issMarker.setLatLng([latitude, longitude]);

          // Ajout de la popup affichant les coordonnées GPS de l'ISS
          issMarker.bindPopup(`Latitude: ${latitude.toFixed(2)}, Longitude: ${longitude.toFixed(2)}`);

          this.map.setView([latitude, longitude]);
        })
        .catch(error => console.error('Error fetching ISS data:', error));
    }, 1000);

    // Activer l'affichage de la popup lors du passage de la souris sur l'icône de l'ISS
    issMarker.on('mouseover', function (e) {
      issMarker.openPopup();
    });

    // Désactiver l'affichage de la popup lorsque la souris quitte l'icône de l'ISS
    issMarker.on('mouseout', function (e) {
      issMarker.closePopup();
    });
  }
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    // Écoutez les changements de l'utilisateur actuel
    this.firebaseService.getCurrentUser().subscribe(pseudonyme => {
      if (pseudonyme) {
        this.welcomeMessage = `Welcome ${pseudonyme}`;
      } else {
        this.welcomeMessage = ''; 
      }
    });
  }



  ngAfterViewInit(): void {
    this.initMap();
  }
}
