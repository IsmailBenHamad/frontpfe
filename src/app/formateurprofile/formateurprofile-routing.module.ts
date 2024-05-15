// In FormateurprofileRoutingModule
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormateurcourseComponent } from './formateurcourse/formateurcourse.component';
import { FormateurLayoutComponent } from './formateur-layout/formateur-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FormateurLayoutComponent, // All child routes will load within this layout
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'formateurcourse' },
      { path: 'formateurcourse', component: FormateurcourseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateurprofileRoutingModule { }
