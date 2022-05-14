import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Typer pro';

  constructor( private titleService: Title,
    private metaTagService: Meta) {

  }

  ngOnInit() {
    this.titleService.setTitle("Typer Pro");  
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'Typing speed test, Test your speed, Typing speed game, WPM, Test typing speed in 60s' },  
      { name: 'robots', content: 'index, follow' }, 
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'With our free typing speed test, you can check your WPM and accuracy in a flash!. Become a fast typer with high accuracy'},
      { name: 'og:description', content: 'Welcome to the #1 Fun Speed Test! Check your true typing speed, accuracy and skill level in just 60 seconds. Also play games which improves our typing speed'},
      { name:'og:type', content: 'website'},
      { charset: 'UTF-8' }  
    ]);  
    
  }

  openDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  closeDropDown() {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
