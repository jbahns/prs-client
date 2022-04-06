import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E404Component } from './e404/e404.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './prs/user/user.component';
import { VendorComponent } from './prs/vendor/vendor.component';
import { ProductComponent } from './prs/product/product.component';
import { RequestComponent } from './prs/request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    E404Component,
    HomeComponent,
    MenuComponent,
    UserComponent,
    VendorComponent,
    ProductComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
