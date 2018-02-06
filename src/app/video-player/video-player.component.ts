import {Component, OnInit, ViewChild,ElementRef,AfterContentInit, Renderer2} from '@angular/core';
import {VgAPI} from 'videogular2/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  
})
export class VideoPlayerComponent implements OnInit {
	preload:string = 'auto';
    api:VgAPI;
	globalListenFunc: Function;

	constructor(private renderer: Renderer2) {}

	ngOnInit() {
		this.globalListenFunc = this.renderer.listen('document', 'keypress', e => {
			// console.log(e.code);
			
		});
	}

	ngOnDestroy() {
		// remove listener
		this.globalListenFunc();
	}

	onPlayerReady(api:VgAPI) {
	    this.api = api;
	    this.globalListenFunc = this.renderer.listen('document', 'keypress', e => {
			if (e.code == 'Space' && api.getDefaultMedia().state == "paused") {
				this.api.play();
			}else{
				this.api.pause()
			}
			if (e.code == 'KeyF' ) {
				this.api.fsAPI.toggleFullscreen();
			}
		});
	    
	    // console.log(this.api.getDefaultMedia())
	    this.api.getDefaultMedia().subscriptions.ended.subscribe(
	        () => {
	            this.api.getDefaultMedia().currentTime = 0;
	            
	        }
	    );
	}

}
