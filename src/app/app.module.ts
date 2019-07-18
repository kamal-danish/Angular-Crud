import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProfileComponent } from './profile/profile.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ProfileComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
