import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message = '';
  messages: any[] = [];
  pseudonyme: string = '';

  constructor(private chatService: ChatService, private firebaseService: FirebaseService) {}

  ngOnInit() {
    // Récupérer le pseudonyme de l'utilisateur dès le chargement du composant
    this.firebaseService.getCurrentUser().subscribe(pseudonyme => {
      if (pseudonyme) { // Vérifiez si le pseudonyme existe
        this.pseudonyme = pseudonyme; // Assignez la valeur du pseudonyme récupéré
      } else {
        this.pseudonyme = 'utilisateur'; // Affectez une valeur par défaut si le pseudonyme n'est pas récupéré
      }
    });

    // Récupérer les messages dès le chargement du composant
    this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

  sendMessage() {
    if (this.message.trim() !== '') {
      this.chatService.sendMessage(this.message, this.pseudonyme);
      this.message = '';
    }
  }
}
