import { Component, OnInit } from '@angular/core';
import {HttpApiService} from '../http-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
	public videos : any[] = []; 
	public video: any;
	constructor(private  apis : HttpApiService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.side_suggestions()
		this.route.params.subscribe(params => {
	       this.apis.post_api( {"pk" : +params['id'],} , "/content/main_video/").subscribe((data: any) => {  
				this.video = data.data[0];
				console.log(this.video, "videooooooo")
				this.side_suggestions()
			})
	       
	    });
	}

	side_suggestions(){
		this.videos = []
		this.apis.get_api("/content/video/").subscribe((data: any) => {  

			while (this.videos.length < 5) {
				var random_number = this.getRandomInt(data.data.length)
				console.log(this.videos)
				console.log(this.videos.indexOf(random_number))
				if(this.videos.indexOf(data.data[random_number]) > -1) {
					continue;
				}
				else{
					this.videos.push(data.data[random_number])
				}	
				
			}
		})

	}

	
	getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

}
