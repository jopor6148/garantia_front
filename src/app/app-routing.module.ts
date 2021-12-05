import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoignComponent } from './generals/components/loign/loign.component';
import { HomeComponent } from './globals/components/home/home.component';
import { UsersComponent } from './globals/components/users/users.component';
import { AuthGuard } from './globals/guards/auth.guard';


const routes: Routes = [
  { path: '', component: LoignComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children:[
    {path:'users',component:UsersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
