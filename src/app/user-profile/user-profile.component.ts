import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: any; // Déclarez la propriété currentUser comme un objet utilisateur
  userEmail: string | null = null; // Ajoutez une propriété pour stocker l'e-mail de l'utilisateur

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getCurrentUser().subscribe((user: any) => {
      this.currentUser = user;
      this.userEmail = this.firebaseService.getUserEmail();

    });
  }
}
