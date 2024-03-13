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
    
    this.firebaseService.getCurrentUser().subscribe(pseudonyme => {
      if (pseudonyme) { 
        this.pseudonyme = pseudonyme; 
      } else {
        this.pseudonyme = 'utilisateur'; 
      }
    });

    this.chatService.getMessages().subscribe(messages => {
      // Inverser l'ordre des messages pour afficher les plus récents en bas
      this.messages = messages.reverse();
    });
  }

  sendMessage() {
    if (this.message.trim() !== '') {
      this.chatService.sendMessage(this.message, this.pseudonyme);
      this.message = '';
    }
  }
}
