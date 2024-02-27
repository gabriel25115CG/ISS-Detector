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
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AccueilTopComponent,
    NasaPictureComponent,
    SeparatorComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent, // Ajoutez NasaPictureComponent ici
    

   
  ],
  imports: [
  BrowserModule,
    FormsModule, // Déplacez FormsModule ici
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    RegisterComponent,
  
  ]
})
export class AppModule { }
