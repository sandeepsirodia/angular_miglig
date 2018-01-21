import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';

import {HttpModule} from "@angular/http";
import {MatInputModule} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TrendingComponent } from './trending/trending.component';
import { NewlistComponent } from './newlist/newlist.component';
import { PopularComponent } from './popular/popular.component';
import { RegionalComponent } from './regional/regional.component';
import { ProdHouseComponent } from './prod-house/prod-house.component';
import { ProfileComponent } from './profile/profile.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
   {
      path: '',
      component: AppComponent
   },
   {
      path: 'login',
      component: LoginComponent
   }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    TrendingComponent,
    NewlistComponent,
    PopularComponent,
    RegionalComponent,
    ProdHouseComponent,
    ProfileComponent,
    VideoPlayerComponent,
    AudioPlayerComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
