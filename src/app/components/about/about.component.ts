import { Component } from '@angular/core';
import { CarouselComponent } from '../shared/carousel/carousel.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  info_1 = [{
    id: 1,
    title: 'Our Journey',
    desc: "One Eleven Development, LLC. It was founded in 2022 by its current owner Carlos De León, with the purpose of helping local businesses in Arizona company was founded primarily to support two of the in Arizona's largest fire system industry, It quickly grew and more software engineers joined to the development team, helping to formalize One Eleven Development as a solid company in Gilbert, Arizona."
  },
  {
    id: 2,
    title: 'Mission',
    desc: "To offer innovative and customized software solutions that drive our customers' success, delivering high-quality and high-value products, we are committed to fostering long-lasting relationships with our customers."
  },
  {
    id: 3,
    title: 'Vision',
    desc: "Become the most trusted software development company in Arizona and Chicago, recognized for our creativity and quality of product delivered, while cultivating an inclusive, collaborative, and stimulating work environment for our employees."
  }];

}
