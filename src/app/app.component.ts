import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
declare const gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'Typer pro';


  constructor( private titleService: Title,
    private metaTagService: Meta,
    private router: Router) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        /** START : Code to Track Page View  */
         gtag('event', 'page_view', {
            page_path: event.urlAfterRedirects
         })
        /** END */
      })

  }


  ngOnInit() {
    this.titleService.setTitle("Type Fast: Free Online Typing Test | Typer Pro");  
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'Free Online Typing Speed Test, Test Your Speed, Online Typing Speed Game,Check WPM, Online Typing Speed Test, WPM, Test Typing Speed in 60s' },  
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'With our free online typing speed test, here in Typer Pro you can check your WPM and accuracy in a flash!. You can also practise to type faster and play the typing game to improve. Become a fast typer with high accuracy.'},
      { name: 'og:description', content: 'Welcome to the #1 Fun Speed Test! Check your true typing speed, accuracy in just 60 seconds. Also play games which improves our typing speed'},
      { name:'og:type', content: 'website'},
      { charset: 'UTF-8' }  
    ]);  
    
  }

  ngOnDestroy() {
    localStorage.clear();
  }
}
