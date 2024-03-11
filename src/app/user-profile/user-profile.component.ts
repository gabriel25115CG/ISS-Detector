import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
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
      await this.fetchUserDescription(); // Utilisation de await pour attendre la résolution de la promesse
    });
  }

  // Fonction pour récupérer la description de l'utilisateur
  async fetchUserDescription(): Promise<void> {
    try {
      const description: string = await this.firebaseService.getUserDescription();
      this.userDescription = description;
    } catch (error) {
      console.error('Error fetching user description:', error);
    }
  }

  // Fonction pour basculer le mode d'édition pour le pseudonyme
  toggleEdit(): void {
    this.editing = !this.editing;
  }

  // Fonction pour mettre à jour le pseudonyme
  updatePseudonyme(): void {
    if (this.newPseudo.trim() !== '') {
      this.firebaseService.updatePseudonyme(this.newPseudo)
        .then(() => {
          console.log('Pseudonyme mis à jour avec succès.');
          // Rafraîchir les données utilisateur après la mise à jour du pseudonyme
          this.fetchUserDescription();
          this.editing = false;
        })
        .catch((error: any) => {
          console.error('Erreur lors de la mise à jour du pseudonyme :', error);
        });
    }
  }

  // Fonction pour sauvegarder la description de l'utilisateur
  saveDescription(): void {
    if (this.userDescription.trim() !== '') {
      this.firebaseService.saveUserDescription(this.userDescription)
        .then(() => {
          console.log('Description utilisateur sauvegardée avec succès.');
          this.descriptionEditing = false;
        })
        .catch((error: any) => {
          console.error('Erreur lors de la sauvegarde de la description utilisateur :', error);
        });
    }
  }

  // Fonction pour basculer le mode d'édition pour la description
  toggleDescriptionEdit(): void {
    this.descriptionEditing = !this.descriptionEditing;
  }
}
