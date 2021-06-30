import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  //{path:'',component: HomeComponent},
  {path:"admin",loadChildren:()=> import('./admin/admin.module').then(mod=>mod.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
