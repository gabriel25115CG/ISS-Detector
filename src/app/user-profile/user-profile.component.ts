import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
// Dans votre composant TypeScript
// Dans votre composant TypeScript
export class UserProfileComponent implements OnInit {
  currentUser: any;
  userEmail: string | null = null;
  newPseudo: string = ''; // Pour stocker le nouveau pseudonyme
  editing: boolean = false; // Pour indiquer si l'utilisateur est en mode édition
  userDescription: string = ''; // Pour stocker la description de l'utilisateur
  descriptionEditing: boolean = false; // Pour indiquer si l'utilisateur est en train d'éditer la description

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getCurrentUser().subscribe(async (user: any) => {
      this.currentUser = user;
      this.userEmail = this.firebaseService.getUserEmail();
    });
  }

 

  // Fonction pour basculer le mode d'édition pour le pseudonyme
  toggleEdit(): void {
    this.editing = !this.editing;
    // Si on annule l'édition, remettre le nouveau pseudonyme à vide
    if (!this.editing) {
      this.newPseudo = '';
    }
  }

  // Fonction pour sauvegarder le pseudonyme de l'utilisateur
  savePseudo(): void {
    if (this.newPseudo.trim() !== '') {
      // Logique pour sauvegarder le nouveau pseudonyme
      // Par exemple, si vous utilisez un service, vous pouvez appeler une fonction dans ce service pour mettre à jour le pseudonyme de l'utilisateur
      this.firebaseService.saveUserPseudonyme(this.newPseudo)
        .then(() => {
          console.log('Pseudonyme utilisateur sauvegardé avec succès.');
          this.currentUser = this.newPseudo; // Mettre à jour le pseudonyme affiché dans le composant
          this.toggleEdit(); // Basculer en mode d'affichage après la sauvegarde
        })
        .catch((error: any) => {
          console.error('Erreur lors de la sauvegarde du pseudonyme utilisateur :', error);
        });
    }
  }

  // Fonction pour basculer le mode d'édition pour la description
  toggleDescriptionEdit(): void {
    this.descriptionEditing = !this.descriptionEditing;
  }

}

