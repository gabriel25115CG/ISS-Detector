import { Component } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  register(email: string, password: string, confirmPassword: string, pseudonyme: string) {
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }
    this.firebaseService.registerUser(email, password, pseudonyme)
      .then(() => {
        alert('User registered successfully');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  }
}
