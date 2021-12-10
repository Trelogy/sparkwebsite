//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesServiceComponent } from './pages/categories-service/categories-service.component';
import { CategoriesProductComponent } from './pages/categories-product/categories-product.component';
import { AnswersServiceComponent } from './pages/answers-service/answers-service.component';
import { AnswersProductComponent } from './pages/answers-product/answers-product.component';
import { CoinsComponent } from './pages/coins/coins.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    CategoriesComponent,
    CategoriesServiceComponent,
    CategoriesProductComponent,
    AnswersServiceComponent,
    AnswersProductComponent,
    CoinsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
