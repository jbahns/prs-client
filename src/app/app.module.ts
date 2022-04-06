import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './prs/user/user.component';
import { VendorComponent } from './prs/vendor/vendor.component';
import { ProductComponent } from './prs/product/product.component';
import { RequestComponent } from './prs/request/request.component';
import { RequestlineComponent } from './prs/requestline/requestline.component';
import { AboutComponent } from './core/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    E404Component,
    HomeComponent,
    MenuComponent,
    UserComponent,
    VendorComponent,
    ProductComponent,
    RequestComponent,
    RequestlineComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
