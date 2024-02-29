import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private firebaseService: FirebaseService) { }

  register(email: string, password: string) {
    this.firebaseService.registerUser(email, password)
      .then(() => {
        // L'utilisateur est inscrit avec succès, vous pouvez gérer les redirections ou d'autres actions ici
        console.log('Utilisateur inscrit avec succès');
      })
      .catch((error) => {
        // Une erreur s'est produite lors de l'inscription de l'utilisateur, vous pouvez gérer les erreurs ici
        console.error('Erreur lors de l\'inscription:', error);
      });
  }
}