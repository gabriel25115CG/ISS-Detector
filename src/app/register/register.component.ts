import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationMessage: string = ''; // Message de succès ou d'erreur

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  register(email: string, password: string, confirmPassword: string, pseudonyme: string, description: string) {
    if (password !== confirmPassword) {
      this.registrationMessage = 'Error: Passwords do not match';
      return;
    }

    this.firebaseService.registerUser(email, password, pseudonyme, description)
      .then(() => {
        this.registrationMessage = 'Success: User registered successfully';
        this.router.navigate(['/login']);
      })
      .catch((error: any) => {
        // Vérifiez si l'erreur a un message
        const errorMessage = error?.message || 'An error occurred during registration';
        this.registrationMessage = `Error: ${errorMessage}`;
      });
  }
}
