import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationBasedInformationComponent } from './location-based-information/location-based-information.component';
import { ReviewsRatingsComponent } from './reviews-ratings/reviews-ratings.component';
import { ProviderInformationComponent } from './provider-information/provider-information.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FirstAidsComponent } from './first-aids/first-aids.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationBasedInformationComponent,
    ReviewsRatingsComponent,
    ProviderInformationComponent,
    NavBarComponent,
    HomeComponent,
    FirstAidsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
