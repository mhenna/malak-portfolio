import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToResidential() {
    this.router.navigate(['/residential'])
  }

  navigateToMedical() {
    this.router.navigate(['/medical'])
  }

  navigateToRetail() {
    this.router.navigate(['/retail'])
  }
}
