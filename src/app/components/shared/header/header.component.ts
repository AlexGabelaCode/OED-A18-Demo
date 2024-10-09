import { Component } from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public menu_1 = [{
    id: 1,
    opcion: 'Home',
    ruta: ''
  },
  {
    id: 2,
    opcion: 'About',
    ruta: 'about'
  },
  {
    id: 3,
    opcion:'Services',
    ruta: 'services'
  },
  {
    id: 4,
    opcion: 'Contact Us',
    ruta: 'contact'
  }];
  
}
