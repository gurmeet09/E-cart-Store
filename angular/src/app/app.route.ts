import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductDescriptionComponent } from './product-description/product-description.component'
import { MyprofileComponent } from './myprofile/myprofile.component'

export const route: Routes = [
  { path:  '', component:HeaderComponent},
  { path: 'login', component:LoginComponent},
  { path: 'signup', component:RegisterComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'productdetail/:productName', component:ProductDescriptionComponent},
  { path: 'myprofile' , component:MyprofileComponent}
  
  
]
