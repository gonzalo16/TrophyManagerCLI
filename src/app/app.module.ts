import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './application/components/user-profile/user-profile/user-profile.component';
import { NavbarComponent } from './application/components/navbar/navbar/navbar.component';
import { TopbarComponent } from './application/components/topbar/topbar/topbar.component';
import { LayoutComponent } from './application/components/layout/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes:Routes=[
  {path:'registro',component:RegistroComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'profile',component:UserProfileComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'topbar',component:TopbarComponent},
  {path:'home',component:HomeComponent},
  {path:'layout',component:LayoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegistroComponent,
    HomeComponent,
    UserProfileComponent,
    NavbarComponent,
    TopbarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
