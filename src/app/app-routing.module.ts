import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProviderInformationComponent} from './provider-information/provider-information.component';
import {LocationBasedInformationComponent} from './location-based-information/location-based-information.component';
import {ReviewsRatingsComponent} from './reviews-ratings/reviews-ratings.component'
import {HomeComponent} from './home/home.component'
import { FirstAidsComponent } from './first-aids/first-aids.component'


const routes: Routes = [
	{path: 'directory', component: ProviderInformationComponent},
	{path: 'location-based-search', component: LocationBasedInformationComponent},
	{path: 'reviews', component: ReviewsRatingsComponent},
	{path: 'home', component: HomeComponent},
	{path: 'directory', component: ProviderInformationComponent},
	{ path: 'first-aid', component: FirstAidsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
