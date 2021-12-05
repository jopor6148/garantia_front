import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoignComponent } from './generals/components/loign/loign.component';
import { UsersComponent } from './globals/components/users/users.component';
import { HomeComponent } from './globals/components/home/home.component';
import { UserProfileComponent } from './globals/components/user-profile/user-profile.component';
import { UserEditComponent } from './globals/components/user-edit/user-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoignComponent,
    UsersComponent,
    HomeComponent,
    UserProfileComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
