import { Component, OnInit } from '@angular/core';
import {HttpApiService} from '../http-api.service';
import { NgxCarousel } from 'ngx-carousel';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public carouselOne: NgxCarousel;
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  
  public imageSources: string[] = [
    'assets/logo.png',
    'assets/logo.png',
    'assets/logo.png',

  ];
  constructor(private  apis : HttpApiService , private router: Router) {}

  ngOnInit() {
  // 	if (!JSON.parse(localStorage.getItem('currentUser'))){
  //     this.router.navigate(['login']);
  // 	}

  // 	if (!this.apis.verify()) {
  //     this.router.navigate(['login']);
		// }

    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
 
    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }

  }

  public carouselTileLoad(evt: any) {
 
    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }
 
  }

  // public tile_video() {
  //   this.router.navigate(['login']);
  // }
  

}
