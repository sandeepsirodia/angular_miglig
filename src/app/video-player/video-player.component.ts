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

	onClickPlayPause(event){
		console.log(this.api)
		if (this.api.state == "playing"){
			this.api.pause();
		}
		else{
			this.api.play();
		}
		
	}

	onPlayerReady(api:VgAPI) {
	    this.api = api;
	    

		this.globalListenFunc = this.renderer.listen('document', 'keydown', e => {
			
			if (e.key == ' ' && e.code == 'Space' && api.getDefaultMedia().state == "paused") {
				this.api.play();
			}else if (e.key == ' ' && e.code == 'Space' && api.getDefaultMedia().state != "paused"){
				this.api.pause()
			}

			if (e.key == 'f' &&  e.key != ' ' ) {
				this.api.fsAPI.toggleFullscreen();
			}
			
			
				
			if (e.code == 'ArrowLeft') {
				this.api.currentTime -= 5;
			}

			if (e.code == 'ArrowRight') {
				this.api.currentTime += 10;
			}

			// else{
			// 	this.api.pause()
			// }
			if (e.code == 'ArrowUp'){
				if (this.api.volume < .95) {
					this.api.volume = this.api.volume + .05;	
				}else{
					this.api.volume = 1;
				}
				
			}
			if (e.code == 'ArrowDown') {
				if (this.api.volume > .05) {
					this.api.volume = this.api.volume - .05;	
				}else{
					this.api.volume = 0;
				}
				
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
