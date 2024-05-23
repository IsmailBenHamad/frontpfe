import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Compte } from 'src/app/model/compte';
import { Enseignant } from 'src/app/model/enseignant';
import { Module } from 'src/app/model/module';

@Component({
  selector: 'app-formateurcourse',
  templateUrl: './formateurcourse.component.html',
  styleUrls: ['./formateurcourse.component.css']
})
export class FormateurcourseComponent implements OnInit {
  modules: Module[] = [];
  compte: Compte | null = null;
  selectedFile: File | null = null;
  enseig: Enseignant | null = null;

  constructor(private authService: AuthService) {}  // Inject AuthService

  ngOnInit(): void {
    this.fetchAccountDetails();
  }

  fetchAccountDetails(): void {
    this.authService.initializeAuthState();  // Re-initialize auth state to ensure data is up-to-date
    this.enseig = this.authService.getEnsegnant();
    this.compte = this.authService.getCompteInfo();
    if (this.compte) {
        this.modules = this.authService.getModules();
        console.log("Modules fetched:", this.modules);
        this.modules.forEach(module => console.log("Module ID:", module._id)); // Verify each module's ID
    }
  }
}
