import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  svg:SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
      this.svg = this.sanitizer.bypassSecurityTrustHtml("SVG CONTENT");

  }  
}
