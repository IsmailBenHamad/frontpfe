import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ModulesComponent } from './modules/modules.component';
import { FormationComponent } from './formation/formation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompteComponent } from './compte/compte.component';
import { LoggedInGuard } from './logged-in.guard';
import { FormateurprofileComponent } from './formateurprofile/formateurprofile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'team', component: TeamComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] }, 
  { path: 'compte', component: CompteComponent },
  { path: 'formateurprofile', component: FormateurprofileComponent },
  {path:  'formation', component: FormationComponent},
  { path: 'modules', component: ModulesComponent },
  {
    path: 'formateurprofile',
    loadChildren: () => import('./formateurprofile/formateurprofile.module').then(m => m.FormateurprofileModule), canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard] 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
