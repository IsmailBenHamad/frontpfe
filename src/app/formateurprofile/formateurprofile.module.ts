// In FormateurprofileModule
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormateurprofileRoutingModule } from './formateurprofile-routing.module';
import { FormateurcourseComponent } from './formateurcourse/formateurcourse.component';
import { RouterModule, Routes } from '@angular/router';
import { FormateurLayoutComponent } from './formateur-layout/formateur-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ModuleDetailsComponent } from './module-details/module-details.component';


@NgModule({
  declarations: [
    FormateurcourseComponent,
    FormateurLayoutComponent,
    ModuleDetailsComponent
  ],
  imports: [
    
    CommonModule,
    FormateurprofileRoutingModule, // Ensure routing is imported here
    MatSidenavModule  
  ],

})
export class FormateurprofileModule { }
