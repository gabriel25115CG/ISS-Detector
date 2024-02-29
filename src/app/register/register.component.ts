import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  register(email: string, password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match'); // Affichage d'une pop-up en cas de mots de passe non correspondants
      return; // Arrêter l'inscription si les mots de passe ne correspondent pas
    }
    this.firebaseService.registerUser(email, password)
      .then(() => {
        // L'utilisateur est inscrit avec succès, afficher une pop-up de succès
        alert('User registered successfully');
        this.router.navigate(['/login']);

      })
      .catch((error) => {
        // Une erreur s'est produite lors de l'inscription de l'utilisateur, vous pouvez gérer les erreurs ici
        console.error('Erreur lors de l\'inscription:', error);
      });
  }
}