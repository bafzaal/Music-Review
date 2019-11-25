import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarOpenComponent } from './navbar-open/navbar-open.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarOpenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarOpenComponent]
})
export class AppModule { }
