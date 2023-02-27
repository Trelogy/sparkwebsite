//Modules
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerModule } from './shared/spinner/spinner.module';
import { SpinnerInterceptor } from './shared/interceptors/spinner.interceptor';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesServiceComponent } from './pages/categories-service/categories-service.component';
import { AnswersServiceComponent } from './pages/answers-service/answers-service.component';
import { CoinsComponent } from './pages/coins/coins.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HistoryComponent } from './pages/history/history.component';
import { UpgradeComponent } from './pages/upgrade/upgrade.component';
import { ShareComponent } from './pages/share/share.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    CategoriesComponent,
    CategoriesServiceComponent,
    AnswersServiceComponent,
    CoinsComponent,
    SigninComponent,
    HistoryComponent,
    UpgradeComponent,
    ShareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    SpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
