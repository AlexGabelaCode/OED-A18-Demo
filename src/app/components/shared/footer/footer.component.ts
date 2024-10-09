import { Component} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent{
  public social_media = [{
    id: 1,
    src: 'icons/facebook-icon.svg',
    href: 'https://www.facebook.com/',
    alt: 'facebook'
  },
  {
    id: 2,
    src: 'icons/linkedin-icon.svg',
    href: 'https://mx.linkedin.com/',
    alt: 'linkedin'
  },
  {
    id: 3,
    src:'icons/youtube-icon.svg',
    href: 'https://www.youtube.com/',
    alt: 'youtube'
  },
  {
    id: 4,
    src: 'icons/instagram-icon.svg',
    href: 'https://www.instagram.com/',
    alt: 'instagram'
  }];
}
