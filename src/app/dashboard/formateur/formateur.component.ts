import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/Formateur.service';
import { Enseignant } from 'src/app/model/enseignant';
import { MatDialog } from '@angular/material/dialog';
import { FormateurAddComponent } from './formateur-add/formateur-add.component'; // Adjust path here

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {
  formateurs: Enseignant[] = [];
  displayedColumns: string[] = ['nom', 'prenom', 'numTel', 'email', 'cin', 'certificat', 'compte', 'actions'];

  constructor(private enseignantService: EnseignantService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllFormateurs();
  }

  getAllFormateurs(): void {
    this.enseignantService.getAllEnseignant().subscribe(
      (formateurs: Enseignant[]) => {
        this.formateurs = formateurs;
      },
      (error) => {
        console.error('Error fetching formateurs:', error);
        // Handle error
      }
    );
  }

  openAddFormateurDialog(): void {
    const dialogRef = this.dialog.open(FormateurAddComponent, {
      width: '600px', // Adjust the width as needed
      data: {} // You can pass data to the dialog if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close event if needed
    });
  }
  openRegister(formateur: Enseignant): void {
    // Implement registration logic here
  }

  // Add other methods like openUpdateFormateurModal(formateur: Enseignant), etc.
}
