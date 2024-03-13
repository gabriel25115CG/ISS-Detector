import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private firestore: AngularFirestore) {}

  getMessages() {
    // Récupérer les messages triés par ordre chronologique
    return this.firestore.collection('message', ref => ref.orderBy('createdAt')).valueChanges();
  }

  sendMessage(text: string, userID: string) {
    // Envoyer le message avec le timestamp actuel comme createdAt
    this.firestore.collection('message').add({
      text,
      userID,
      createdAt: new Date().toString()
    });
  }
}
