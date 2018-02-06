import {Component, OnInit, ViewChild,ElementRef,AfterContentInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
  
})
export class VideoPlayerComponent implements OnInit {

	globalListenFunc: Function;

	constructor(private renderer: Renderer2) {}

	ngOnInit() {
		this.globalListenFunc = this.renderer.listen('document', 'keypress', e => {
			console.log(e);
		});
	}

	ngOnDestroy() {
		// remove listener
		this.globalListenFunc();
	}

}
