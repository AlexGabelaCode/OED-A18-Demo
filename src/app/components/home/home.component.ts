import { Component } from '@angular/core';
import { NgOptimizedImage, NgClass } from '@angular/common'
import { CarouselComponent } from '../shared/carousel/carousel.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, CarouselComponent, NgClass, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  carousel_1 = [{
    id: 1,
    imageSrc: 'img/iphone-blue.jpg',
    imageAlt: 'iphone-blue'
  },
  {
    id: 2,
    imageSrc: 'img/macbookpro.jpg',
    imageAlt: 'macbookpro'
  },
  {
    id: 3,
    imageSrc: 'img/macbookpro-iphone.jpg',
    imageAlt: 'macbookpro-iphone'
  }];

  carousel_2 = [{
    id: 1,
    imageSrc: 'img/iphone.jpeg',
    imageAlt: 'iphone'
  },
  {
    id: 2,
    imageSrc: 'img/iwatch.jpg',
    imageAlt: 'iwatch'
  },
  {
    id: 3,
    imageSrc: 'img/ipad.jpg',
    imageAlt: 'ipad'
  },
  {
    id: 4,
    imageSrc: 'img/mac.jpg',
    imageAlt: 'mac'
  }];

  carousel_3 = [{
    id: 1,
    imageSrc: 'img/web-design-mac.jpg',
    imageAlt: 'web-design-mac'
  },
  {
    id: 2,
    imageSrc: 'img/web-design.jpg',
    imageAlt: 'web-design'
  },
  {
    id: 3,
    imageSrc: 'img/software-developer.jpg',
    imageAlt: 'software-developer'
  },
  {
    id: 4,
    imageSrc: 'img/web.jpg',
    imageAlt: 'web'
  }];
}
