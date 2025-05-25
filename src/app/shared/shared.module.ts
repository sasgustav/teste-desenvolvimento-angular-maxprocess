import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FooterComponent } from './footer/footer.component';
import { MetricCardComponent } from './metric-card/metric-card.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    FooterComponent,
    MetricCardComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    NavMenuComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
    RouterModule,
    FooterComponent,
    MetricCardComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    NavMenuComponent,
    UserProfileComponent,
  ],
})
export class SharedModule {}
