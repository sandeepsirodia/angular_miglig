import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { HttpModule } from "@angular/http";
import { MatInputModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpApiService } from './http-api.service';
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
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from "videogular2/buffering";
import { VgStreamingModule } from "videogular2/streaming";
import { AppFieldErrorDisplayComponent } from './app-field-error-display/app-field-error-display.component';
import { InterceptorModule} from './interceptor.module';

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
   },
   {
      path: 'signup',
      component: SignupComponent
   },
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
    HomeComponent,
    AppFieldErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
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
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    HttpClientModule,
    InterceptorModule,

  ],
  providers: [HttpApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
