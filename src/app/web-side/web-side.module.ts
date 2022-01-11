import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebSideRoutingModule } from './web-side-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MenuNavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    WebSideRoutingModule
  ]
})
export class WebSideModule { }
