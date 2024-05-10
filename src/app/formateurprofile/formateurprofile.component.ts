// formateurprofile.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Module } from '../model/module';
import { Compte } from '../model/compte';
import { MatDialog } from '@angular/material/dialog';
import { Emploi } from '../model/emploi';
import { EmploiService } from '../services/emploi.service';
import { ModuleService } from '../services/module.service';
import { AbsenceService } from '../services/absence.service';

import { Etudiant } from '../model/etudiant';
import { Enseignant } from '../model/enseignant';

@Component({
  selector: 'app-formateurprofile',
  templateUrl: './formateurprofile.component.html',
  styleUrls: ['./formateurprofile.component.css']
})
export class FormateurprofileComponent {

  constructor(
    private moduleService: ModuleService,
    private dialog: MatDialog, 
    private emploiService: EmploiService, 
    private authService: AuthService,
    private absenceService: AbsenceService
  ) {}

  compte: Compte | null = null;
  enseig: Enseignant | null = null;
  modules: Module[] = [];
  etudiantsAbsents: Etudiant[] = []; // Liste des étudiants absents
  selectedModuleId: string | null = null; // ID du module sélectionné

  ngOnInit(): void {
    this.fetchAccountDetails();
  }

  fetchAccountDetails(): void {
    this.enseig = this.authService.getEnsegnant();
    this.compte = this.authService.getCompteInfo();
    if (this.compte) {
       this.modules = this.authService.getModules() || [];
    }
  }

  // Fonction pour ajouter un étudiant à la liste des absents
  addStudentToAbsence(etudiant: Etudiant): void {
    this.etudiantsAbsents.push(etudiant);
  }

  // Fonction pour enregistrer l'absence avec la liste des étudiants absents
  // Fonction pour enregistrer l'absence avec la liste des étudiants absents
saveAbsence(): void {
  // Vérifier s'il y a des étudiants absents et que le module est sélectionné
  if (this.etudiantsAbsents.length > 0 && this.selectedModuleId) {
    // Créer un tableau d'IDs d'étudiants absents en filtrant les valeurs undefined
    const etudiantsIds = this.etudiantsAbsents
      .map(etudiant => etudiant._id)
      .filter(id => !!id) as string[];

    // Vérifier si tous les identifiants d'étudiants sont définis
    if (etudiantsIds.length !== this.etudiantsAbsents.length) {
      console.error('Certains identifiants d\'étudiants sont indéfinis.');
      return;
    }

    // Créer l'absence avec les IDs des étudiants absents et l'ID du module sélectionné
    this.absenceService.createAbsence(this.selectedModuleId, etudiantsIds)
      .subscribe(newAbsence => {
        // Réinitialiser la liste des étudiants absents après l'enregistrement
        this.etudiantsAbsents = [];
        console.log('New absence created:', newAbsence);
        // Vous pouvez actualiser la liste des absences ou effectuer toute autre action nécessaire
      });
  } else {
    console.log('Aucun étudiant sélectionné pour l\'absence ou aucun module sélectionné.');
  }
}


  // Fonction pour mettre à jour l'ID du module sélectionné
  selectModule(moduleId: string): void {
    this.selectedModuleId = moduleId;
  }
}
