import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { route } from './app.route';
import { RegisterComponent } from './register/register.component';
import { FormsModule }   from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { Productservice } from './app.service';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { MyprofileComponent } from './myprofile/myprofile.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProductDescriptionComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [Productservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
