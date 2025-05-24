import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const url = (event as NavigationEnd).urlAfterRedirects;
        const segments = url.split('/').filter(s => s);
        let path = '';
        this.breadcrumbs = segments.map(seg => {
          path += `/${seg}`;
          return { label: this.formatLabel(seg), url: path };
        });
      });
  }

  private formatLabel(segment: string): string {
    switch (segment) {
      case 'home':
        return 'Home';
      case 'users':
        return 'Usuários';
      case 'auth':
        return 'Login';
      default:
        return segment.charAt(0).toUpperCase() + segment.slice(1);
    }
  }
}
