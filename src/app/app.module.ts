import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { HttpModule } from "@angular/http";
import { MatInputModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';


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
import { HomeComponent } from './home/home.component';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';

const appRoutes: Routes = [
   {
      path: '',
      component: HomeComponent
   },
   {
      path: 'login',
      component: LoginComponent
   },
   {
      path: 'regions',
      component: RegionalComponent
   },
   {
      path: 'profile',
      component: ProfileComponent
   },
   {
      path: 'aboutus',
      component: AboutusComponent
   },
   {
      path: 'video',
      component: VideoPlayerComponent
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
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpModule,
    MatTableModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    VgCoreModule,
    VgControlsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
