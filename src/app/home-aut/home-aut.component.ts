import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importer le service Router
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-home-aut',
  templateUrl: './home-aut.component.html',
  styleUrls: ['./home-aut.component.css']
})
export class HomeAUTComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {
    // this.firebaseService.isLoggedIn().subscribe(isLoggedIn => {
    //   this.isLoggedIn = isLoggedIn;
      if (! this.firebaseService.isLoggedIn()) {
        // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
        this.router.navigate(['/homeAUT']); // Utiliser le service Router pour naviguer vers la page de connexion
      }
    // });
  }
}
