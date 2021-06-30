import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'home',component: HomeComponent, canActivate:[AuthGuardGuard]},
  {path:'profile',component: StatisticsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
