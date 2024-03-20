import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactformComponent } from './contactform/contactform.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticatedService } from './authenticated.service'; // Importez le service de garde de route
import { HomeAUTComponent } from './home-aut/home-aut.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ForumComponent } from './forum/forum.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Route pour la page d'accueil
  { path: 'login', component: LoginComponent }, // Route pour la page de connexion
  { path: 'contact', component: ContactformComponent }, // Route pour la page de contact
  { path: 'register', component: RegisterComponent }, // Route pour la page d'inscription
  { path: 'home', component: HomeComponent, canActivate: [AuthenticatedService] }, // Utilisez le service de garde de route pour protéger la route vers la page d'accueil
  { path: 'homeAUT', component: HomeAUTComponent, canActivate: [AuthenticatedService] }, // Route vers HomeAUT accessible uniquement aux utilisateurs authentifiés
  { path: 'about', component: AboutComponent }, // Route pour la page d'accueil
  { path: 'profile', component: ProfileComponent, canActivate: [AuthenticatedService] }, // Route pour la page de profil
  { path: 'forum', component: ForumComponent, canActivate: [AuthenticatedService] } // Route pour la page de forum


  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
