import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  termsURL = '#';
  privacyURL = '#';
  contactURL = '#';
  aboutURL = '#';
  year = new Date().getFullYear();
}
