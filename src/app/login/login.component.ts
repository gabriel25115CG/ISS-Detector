import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false; // Variable pour suivre l'état de chargement

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  login(email: string, password: string) {
    this.isLoading = true; // Début du chargement
    this.firebaseService.loginUser(email, password)
      .then(() => {
        // L'utilisateur est connecté avec succès, afficher une alerte de succès
        this.router.navigate(['/homeAUT']);
      })
      .catch((error) => {
        // Une erreur s'est produite lors de la connexion de l'utilisateur, afficher une alerte d'échec avec le message d'erreur
        alert('Authentication failed: ' + error.message);
        console.error('Erreur lors de la connexion:', error);
      })
      .finally(() => {
        this.isLoading = false; // Fin du chargement, quelle que soit l'issue
      });
  }
}
