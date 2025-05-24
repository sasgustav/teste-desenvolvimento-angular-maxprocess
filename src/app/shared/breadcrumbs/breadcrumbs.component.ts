import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, Event as RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';
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
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  breadcrumbs: Breadcrumb[] = [];
  private subscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(event => {
        this.breadcrumbs = this.buildBreadcrumbs(event.urlAfterRedirects);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private buildBreadcrumbs(url: string): Breadcrumb[] {
    const segments = url.split('/').filter(s => s);
    let path = '';
    return segments.map(segment => {
      path += `/${segment}`;
      return { label: this.formatLabel(segment), url: path };
    });
  }

  private formatLabel(segment: string): string {
    switch (segment) {
      case 'home':  return 'Home';
      case 'users': return 'Usuários';
      case 'auth':  return 'Login';
      default:      return segment.charAt(0).toUpperCase() + segment.slice(1);
    }
  }
}
