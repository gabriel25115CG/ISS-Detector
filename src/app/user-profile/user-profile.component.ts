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
  newPseudo: string = ''; // Ajout d'une propriété pour stocker le nouveau pseudonyme
  editing: boolean = false; // Ajout de la propriété editing


  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getCurrentUser().subscribe((user: any) => {
      this.currentUser = user;
      this.userEmail = this.firebaseService.getUserEmail();
    });
  }

  // Méthode pour mettre à jour le pseudonyme
  updatePseudonyme(): void {
    if (this.newPseudo.trim() !== '') {
      this.firebaseService.updatePseudonyme(this.newPseudo)
        .then(() => {
          console.log('Pseudonyme mis à jour avec succès.');
          // Rafraîchir les données utilisateur
          this.firebaseService.getCurrentUser().subscribe((user: any) => {
            this.currentUser = user;
          });
        })
        .catch((error: any) => {
          console.error('Erreur lors de la mise à jour du pseudonyme :', error);
        });
    }
  }

   // Méthode pour basculer le mode d'édition
   toggleEdit(): void {
    this.editing = !this.editing;
  }
}
