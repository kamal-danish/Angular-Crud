import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { FormConditionComponent } from './form-condition/form-condition.component';


const routes: Routes = [{
    path:'login',component:LoginComponent
  },{
    path:'',component:RegisterComponent
  },{
    path:'register',component:RegisterComponent
  },{
    path:'user',component:UserComponent
  },{
    path:'profile',component:ProfileComponent,
    canActivate:[AuthGuardService]
  },{
    path:'parent',component:ParentComponent
  },{
    path:'child',component:ChildComponent
  },{
    path:'async',component:AsyncPipeComponent
  },{
    path:'form',component:FormConditionComponent
  },{
    path:'**',redirectTo:'login'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
