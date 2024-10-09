import { afterNextRender, Component, Input, OnInit} from '@angular/core';
import { NgClass } from '@angular/common';
import { CarouselImages } from '../../interface/carouselImages';
import { AboutInfo } from '../../interface/aboutInfo';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit{

  @Input() images: CarouselImages[] = []
  @Input() info: AboutInfo[] = []
  @Input() indicators = true;
  @Input() controls = false;
  @Input() autoSlide = false;
  @Input() imageCarousel = false;
  @Input() textCarousel = false;
  @Input() slideInterval = 3000; //Default 3 sec

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  //Change slide every n sec
  autoSlideImages(): void{
    afterNextRender(() => {
      setInterval(() => {   //Error 500 - timeout render without afterNextRender
        this.onNextClick();
      }, this.slideInterval);
    });
  }

  //Sets index of image on dot/indicator with a click
  selectImage(index: number): void{
    this.selectedIndex = index;
  }

  //Arrows click
  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }else{
      this.selectedIndex --;
    }
  }
  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex ++;
    }
  }
}