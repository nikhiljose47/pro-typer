import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      'Learn how to type faster. Touch typing tips - Typer Pro'
    );
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content:
          'Improve typing speed, fast typing ',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Learn how to touch type ; Sitting posture for typing · Sit straight and remember to keep your back straight. ; Keyboard scheme · Hit keys only with the fingers for',
      },
      {
        name: 'og:description',
        content:
          'earn how to touch type ; Sitting posture for typing · Sit straight and remember to keep your back straight. ; Keyboard scheme · Hit keys only with the fingers for',
      },
      { name: 'og:type', content: 'website' },
      { charset: 'UTF-8' },
    ]);

  }

}
