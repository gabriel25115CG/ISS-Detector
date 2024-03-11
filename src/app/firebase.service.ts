import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthError,
  UserCredential,
  onAuthStateChanged,
  User,
  updateProfile,

} from 'firebase/auth'; 
import { Observable, BehaviorSubject } from 'rxjs';
import { sendPasswordResetEmail } from 'firebase/auth'; 
import { doc, getDoc, setDoc } from 'firebase/firestore';



@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private db: any;
  private auth: any;
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<string>(''); 
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  currentUser$: Observable<string> = this.currentUserSubject.asObservable();
  

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCtqic4VFqa5yOsHcJ7vs1_suJWvUJ7YQA',
      authDomain: 'iss-detector-b114b.firebaseapp.com',
      databaseURL: 'https://iss-detector-b114b-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'iss-detector-b114b',
      storageBucket: 'iss-detector-b114b.appspot.com',
      messagingSenderId: '51960108231',
      appId: '1:51960108231:web:4d9afc03adb07d592e1ae2',
      measurementId: 'G-LDEPSVZ1TQ',
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    this.db = getFirestore(app);
    this.auth = getAuth(app);

    // Écoute les changements d'état de l'authentification
    onAuthStateChanged(this.auth, (user: User | null) => {
      if (user) {
        this.isLoggedInSubject.next(true);
        this.setCurrentUser(user); // Met à jour le pseudonyme de l'utilisateur connecté
      } else {
        this.isLoggedInSubject.next(false);
        this.currentUserSubject.next(''); // Réinitialise le pseudonyme si l'utilisateur se déconnecte
      }
    });
  }

  private setCurrentUser(user: User) {
    // Récupère le pseudonyme de l'utilisateur
    // Vous devrez adapter cette fonction pour récupérer le pseudonyme de l'utilisateur à partir de votre base de données ou d'une autre source
    const pseudonyme = user.displayName || 'Utilisateur';
    this.currentUserSubject.next(pseudonyme);
  }

// Méthode pour récupérer la description de l'utilisateur
async getUserDescription(): Promise<string> {
  const user = this.auth.currentUser;
  if (user) {
    const docRef = doc(this.db, 'userDescriptions', user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data()['description']; // Utiliser ['description'] pour accéder à la propriété
    } else {
      return '';
    }
  } else {
    return '';
  }
}

// Méthode pour sauvegarder la description de l'utilisateur
async saveUserDescription(description: string): Promise<void> {
  const user = this.auth.currentUser;
  if (user) {
    const docRef = doc(this.db, 'userDescriptions', user.uid);
    await setDoc(docRef, { description });
  } else {
    throw new Error('Utilisateur non connecté.');
  }
}

async saveUserPseudonyme(newPseudonyme: string): Promise<void> {
  try {
    const user = this.auth.currentUser;
    if (user) {
      await updateProfile(user, { displayName: newPseudonyme });
      console.log('Pseudonyme utilisateur sauvegardé avec succès.');
      // Mettre à jour le pseudonyme dans le sujet
      this.setCurrentUser(user);
    } else {
      throw new Error('Utilisateur non connecté.');
    }
  } catch (error: any) {
    console.error('Erreur lors de la sauvegarde du pseudonyme utilisateur :', error);
    throw error;
  }
}


async registerUser(
  email: string,
  password: string,
  pseudonyme: string
): Promise<void> {
  try {
    const userCredential: UserCredential =
      await createUserWithEmailAndPassword(this.auth, email, password);
    const user = userCredential.user;

    // Enregistrez le pseudonyme avec l'utilisateur dans Firebase
    await updateProfile(user, { displayName: pseudonyme });

    console.log('User registered:', user);
  } catch (error: any) {
    console.error('Error registering user:', error);
    throw error;
  }
}

  async loginUser(email: string, password: string): Promise<string> {
    try {
      const auth = getAuth(); // Récupérer l'objet d'authentification
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log('Utilisateur connecté:', user);

      // Récupérer le token JWT de l'utilisateur
      const idToken = await user.getIdToken();

      // Stocker le token JWT dans le stockage local du navigateur
      localStorage.setItem('token', idToken);
      console.log('Token JWT:', idToken);
      console.log(localStorage.getItem('token'));

      return idToken; // Retourner le token JWT
    } catch (error: any) {
      const errorCode = (error as AuthError).code;
      const errorMessage = (error as AuthError).message;
      console.error('Erreur lors de la connexion:', errorMessage);
      throw error;
    }
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getCurrentUser(): Observable<string | null> {
    return this.currentUser$;
  }
  
  getUserEmail(): string | null {
    const user = this.auth.currentUser;
    if (user && user.email) {
      return user.email;
    } else {
      return null;
    }
  }


  async resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(this.auth, email);
      console.log('Email de réinitialisation du mot de passe envoyé.');
    } catch (error: any) {
      console.error('Erreur lors de la réinitialisation du mot de passe :', error);
      throw error;
    }
  }

  async updatePseudonyme(newPseudonyme: string): Promise<void> {
    try {
      const user = this.auth.currentUser;
      if (user) {
        await updateProfile(user, { displayName: newPseudonyme });
        console.log('Pseudonyme mis à jour avec succès.');
        // Actualiser le pseudonyme dans le sujet
        this.setCurrentUser(user);
      } else {
        throw new Error('Utilisateur non connecté.');
      }
    } catch (error: any) {
      console.error('Erreur lors de la mise à jour du pseudonyme :', error);
      throw error;
    }
  }


}


