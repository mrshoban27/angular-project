import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    
      path:'about',
      component:AboutComponent
    
  },
  {
    
    path:'login',
    component:LoginComponent
  },
  {
    
    path:'contact',
    component:ContactComponent
  },
  {
    path:'user',
    component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
