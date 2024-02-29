import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, AuthError, UserCredential } from 'firebase/auth'; // Assurez-vous que cette importation est correcte

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
      const userCredential: UserCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      // L'utilisateur est inscrit avec succès
      const user = userCredential.user;
      console.log('Utilisateur inscrit:', user);
    } catch (error: any) {
      // Une erreur s'est produite lors de l'inscription de l'utilisateur
      const errorCode = (error as AuthError).code;
      const errorMessage = (error as AuthError).message;
      console.error('Erreur lors de l\'inscription:', errorMessage);
      throw error;
    }
  }

  async loginUser(email: string, password: string): Promise<void> {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(this.auth, email, password);
      // L'utilisateur est connecté avec succès
      const user = userCredential.user;
      console.log('Utilisateur connecté:', user);
    } catch (error: any) {
      // Une erreur s'est produite lors de la connexion de l'utilisateur
      const errorCode = (error as AuthError).code;
      const errorMessage = (error as AuthError).message;
      console.error('Erreur lors de la connexion:', errorMessage);
      throw error;
    }
  }
  isLoggedIn(): boolean {
    return !!this.auth.currentUser; // Renvoie vrai si l'utilisateur est connecté, faux sinon
  }

  // Autres méthodes Firebase (par exemple, pour ajouter un document à Firestore) peuvent être ajoutées ici
}
