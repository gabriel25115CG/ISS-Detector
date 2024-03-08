import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilTopComponent } from './accueil-top/accueil-top.component';
import { NasaPictureComponent } from './nasa-picture/nasa-picture.component';
import { SeparatorComponent } from './separator/separator.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FirebaseService } from './firebase.service';
import { NasaApiService } from './nasa-api.service';
import { ContactformComponent } from './contactform/contactform.component';
import { RegisterComponent } from './register/register.component';
import { HomeAUTComponent } from './home-aut/home-aut.component';
import { NavbarautComponent } from './navbaraut/navbaraut.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarprofileComponent } from './navbarprofile/navbarprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AccueilTopComponent,
    NasaPictureComponent,
    SeparatorComponent,
    LoginComponent,
    FooterComponent,
    ContactformComponent,
    RegisterComponent,
    HomeAUTComponent,
    NavbarautComponent,
    MapComponent,
    AboutComponent,
    ProfileComponent,
    NavbarprofileComponent,

   
  ],
  imports: [
  BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule,FirebaseService, NasaApiService, NgModule, FormData,],
  
  bootstrap: [
    AppComponent,
    FormsModule,
    BrowserModule
    
  
  ]
})
export class AppModule { }
