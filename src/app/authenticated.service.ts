

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedService implements CanActivate {

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  canActivate(): boolean {
    if (this.firebaseService.isLoggedIn()) {
      return true; // L'utilisateur est authentifié, permet l'accès à la route
    } else {
      this.router.navigate(['/login']); // L'utilisateur n'est pas authentifié, redirige vers la page de connexion
      return false;
    }
  }
}
