import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { DraftComponent } from './draft/draft.component';
import { InboxComponent } from './inbox/inbox.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';


const routes: Routes = [
  { path: 'compose', component: ComposeComponent },
  { path: 'draft', component: DraftComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'login', component: LogincomponentComponent },
  { path: 'signup', component: SignupcomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
