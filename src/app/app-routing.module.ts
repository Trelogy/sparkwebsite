import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LandingComponent } from './pages/landing/landing.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CoinsComponent } from './pages/coins/coins.component';
import { AnswersServiceComponent } from './pages/answers-service/answers-service.component';
import { CategoriesServiceComponent } from './pages/categories-service/categories-service.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing',          component: LandingComponent },
  { path: 'categories',          component: CategoriesComponent },
  { path: 'coins',          component: CoinsComponent },
  { path: 'answers-service',          component: AnswersServiceComponent },
  { path: 'categories-service',          component: CategoriesServiceComponent },
  { path: 'signin',          component: SigninComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash : true
      })
    ],
  exports: [RouterModule]


})
export class AppRoutingModule { }
