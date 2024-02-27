// register.component.ts

import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service'; // Assurez-vous que le chemin vers votre service est correct
import { FormsModule } from '@angular/forms'; // Importez FormsModule depuis @angular/forms


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData: any = {}; // Un objet pour stocker les données du formulaire

  constructor(private firebaseService: FirebaseService) { }

  register() {
    // Appelez la méthode addUser() du service Firebase en passant les données du formulaire
    this.firebaseService.addUser(this.formData)
      .subscribe(
        response => {
          console.log('Utilisateur ajouté avec succès à Firebase');
          // Ajoutez une redirection ou un message de succès ici
        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'utilisateur à Firebase : ', error);
          // Gérez l'erreur ici
        }
      );
  }
}
