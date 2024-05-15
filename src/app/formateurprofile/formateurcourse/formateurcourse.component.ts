import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Compte } from 'src/app/model/compte';
import { Enseignant } from 'src/app/model/enseignant';
import { Etudiant } from 'src/app/model/etudiant';
import { Module } from 'src/app/model/module';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-formateurcourse',
  templateUrl: './formateurcourse.component.html',
  styleUrls: ['./formateurcourse.component.css']
})
export class FormateurcourseComponent {
  constructor(
    private accountService: AccountService,
    private authService: AuthService,
  ) {}

  compte: Compte | null = null;
  enseig: Enseignant | null = null;
  modules: Module[] = [];
  etudiantsAbsents: Etudiant[] = []; // Liste des étudiants absents
  selectedModuleId: string | null = null; // ID du module sélectionné

  ngOnInit(): void {
    this.fetchAccountDetails();
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadImage(file);
    }
  }
  uploadImage(file: File): void {
    if (this.compte && this.compte._id) {
      this.accountService.uploadAccountImage(this.compte._id, file).subscribe({
        next: (response) => {
          console.log('Image uploaded successfully:', response);
          if (this.compte) { // Check if compte is not null before accessing it
            this.compte.imageUrl = response.imageUrl; // Safely update imageUrl
          }
        },
        error: (error) => {
          console.error('Error uploading image:', error);
        }
      });
    }
  }

  fetchAccountDetails(): void {
    this.enseig = this.authService.getEnsegnant();
    this.compte = this.authService.getCompteInfo();
    if (this.compte) {
       this.modules = this.authService.getModules() || [];
    }
  }


}
