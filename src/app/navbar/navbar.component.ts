import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  links = [
    { text: 'Home', url: '/home' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];

  loginURL = 'https://playcenter.azurewebsites.net/account/signin/';
  createAccounyURL =
    'https://playcenter.azurewebsites.net/account/createaccount/';
}
