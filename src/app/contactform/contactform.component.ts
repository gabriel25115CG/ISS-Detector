import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent {
  formData: any = {}; // Définissez formData comme un objet vide pour stocker les données du formulaire

  submitForm() {
    console.log(this.formData); // Utilisez cette fonction pour g
  }
}