import {Component, OnInit, ViewChild,ElementRef,AfterContentInit, Renderer2, HostListener} from '@angular/core';
import {VgAPI} from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import {HttpApiService} from '../http-api.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  
})
export class VideoPlayerComponent implements OnInit {
	preload:string = 'auto';
    api:VgAPI;
    control_api:VgControlsModule;
	globalListenFunc: Function;
	vgSlider: boolean;

	constructor(private renderer: Renderer2, private  apis : HttpApiService
		) {}

	ngOnInit() {
		this.apis.verify()
	}

	ngOnDestroy() {
		// remove listener
		this.globalListenFunc();
	}

	onDoubleClickFullscreen(event: MouseEvent): void {
		this.api.fsAPI.toggleFullscreen();
		console.log(this)
	}

	@HostListener('mouseover') onMouseEnter(control_api:VgControlsModule) {
		return true
	}

	



	onPlayerReady(api:VgAPI) {
	    this.api = api;

		this.globalListenFunc = this.renderer.listen('document', 'keydown', e => {
			if (e.key == ' ' && e.code == 'Space' && api.getDefaultMedia().state == "paused") {
				this.api.play();
			}else if (e.key == ' ' && e.code == 'Space' && api.getDefaultMedia().state != "paused"){
				this.api.pause()
			}

			if (e.altKey && e.code == 'ArrowRight') {
				this.api.currentTime += 150;
			}

			if (e.altKey && e.code == 'ArrowLeft') {
				this.api.currentTime -= 150;
			}

			if (e.shiftKey && e.code == 'ArrowRight') {
				this.api.currentTime += 1;
			}

			if (e.shiftKey && e.code == 'ArrowLeft') {
				this.api.currentTime -= 1;
			}

			if (e.key == 'f' &&  e.key != ' ' ) {
				this.api.fsAPI.toggleFullscreen();
			}
							
			if (e.code == 'ArrowLeft' && !e.shiftKey ) {
				this.api.currentTime -= 5;
			}

			if (e.code == 'ArrowRight' && !e.shiftKey ) {
				this.api.currentTime += 10;
			}

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
	    
	    this.api.getDefaultMedia().subscriptions.ended.subscribe(
	        () => {
	            this.api.getDefaultMedia().currentTime = 0;
	            
	        }
	    );
	}

}
