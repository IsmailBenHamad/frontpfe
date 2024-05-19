// In FormateurprofileModule
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormateurprofileRoutingModule } from './formateurprofile-routing.module';
import { FormateurcourseComponent } from './formateurcourse/formateurcourse.component';
import { RouterModule, Routes } from '@angular/router';
import { FormateurLayoutComponent } from './formateur-layout/formateur-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ModuleDetailsComponent } from './module-details/module-details.component';
import { AbsenceComponent } from './module-details/absence/absence.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { EmploiComponent } from './module-details/emploi/emploi.component';


@NgModule({
  declarations: [
    FormateurcourseComponent,
    FormateurLayoutComponent,
    ModuleDetailsComponent,
    AbsenceComponent,
    EmploiComponent
  ],
  imports: [
    
    CommonModule,
    FormateurprofileRoutingModule, // Ensure routing is imported here
    MatSidenavModule,
    MatTableModule ,
    MatCheckboxModule,
    FormsModule

  ],

})
export class FormateurprofileModule { }
