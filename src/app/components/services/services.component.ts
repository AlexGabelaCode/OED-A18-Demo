import { Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatExpansionModule, RouterLink, RouterOutlet],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

iosActive: boolean = false;
developActive: boolean = false;

benefits = [{
  id: 1,
  iconSrc: 'icons/user-icon.svg',
  iconAlt: 'user-icon',
  title: 'Better user experience',
  desc: "Native apps closely follow Apple's Human Interface Guidelines, resulting in a more intuitive interface that is consistent with the rest of the system. Users find these apps more familiar and easier to use."
},
{
  id: 2,
  iconSrc: 'icons/device-icon.svg',
  iconAlt: 'device-icon',
  title: 'Full access to device functionalities',
  desc: 'Native apps can interact directly with all iOS device features, such as the camera, GPS, accelerometer, push notifications, and the latest Apple APIs. This allows you to create richer and more functional user experiences.'
},
{
  id: 3,
  iconSrc: 'icons/opti-icon.svg',
  iconAlt: 'optimazed-icon',
  title: 'Optimized performance',
  desc: 'Native development makes it possible to take full advantage of iOS hardware and operating system. This translates into faster, smoother, and more resource-efficient applications such as battery and memory.'
}];

show_ios(){
  this.iosActive = true;
  this.developActive = false;
}

show_webDevelop(){
  this.developActive = true;
  this.iosActive = false;
}

}
