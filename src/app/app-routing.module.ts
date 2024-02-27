import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Route pour la page d'accueil
  { path: 'login', component: LoginComponent }, // Route pour la page de connexion
  { path: 'register', component: RegisterComponent }, // Route pour la page d'inscription
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
