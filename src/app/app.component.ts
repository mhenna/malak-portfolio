import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'malak-portfolio';

  constructor(private router: Router) { }

  navigate(fragment) {
    fragment.scrollIntoView({behavior: 'smooth'});
  }
}
