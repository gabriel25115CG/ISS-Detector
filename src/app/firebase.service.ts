import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private db: any;
  private auth: any;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCtqic4VFqa5yOsHcJ7vs1_suJWvUJ7YQA",
      authDomain: "iss-detector-b114b.firebaseapp.com",
      databaseURL: "https://iss-detector-b114b-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "iss-detector-b114b",
      storageBucket: "iss-detector-b114b.appspot.com",
      messagingSenderId: "51960108231",
      appId: "1:51960108231:web:4d9afc03adb07d592e1ae2",
      measurementId: "G-LDEPSVZ1TQ"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    this.db = getFirestore(app);
    this.auth = getAuth(app);
  }

  async registerUser(email: string, password: string): Promise<void> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      // L'utilisateur est inscrit avec succès
      const user = userCredential.user;
      console.log('Utilisateur inscrit:', user);
    } catch (error: any) {
      // Une erreur s'est produite lors de l'inscription de l'utilisateur
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erreur lors de l\'inscription:', errorMessage);
      throw error;
    }
  }

  // Autres méthodes Firebase (par exemple, pour ajouter un document à Firestore) peuvent être ajoutées ici
}
