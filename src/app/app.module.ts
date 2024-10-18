import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'
import { AuthGuard } from './guards/auth.guard';
import { ProudctDetailsComponent } from './components/proudct-details/proudct-details.component';
import { ProudctRatingComponent } from './components/proudct-rating/proudct-rating.component';
import { ProudctOffersComponent } from './components/proudct-offers/proudct-offers.component';

import {FormsModule} from '@angular/forms'
import { ProductServiceModule } from './modules/product-service/product-service.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        ProductListComponent,
        ProudctDetailsComponent,
        ProudctRatingComponent,
        ProudctOffersComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ProductServiceModule], providers: [AuthGuard, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
