import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/formation'; // Importer le modèle de formation
import { FormationService } from '../services/formation.service'; // Importer le service de formation

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formations: Formation[] = []; // Déclarer la propriété formations et initialiser-la avec un tableau vide

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.fetchFormations(); // Appeler la méthode pour récupérer les formations lors de l'initialisation du composant
  }

  fetchFormations(): void {
    this.formationService.getAllFormations().subscribe(
      formations => {
        this.formations = formations; // Affecter les formations récupérées au tableau formations
      },
      error => {
        console.error('Erreur lors de la récupération des formations :', error);
      }
    );
  }
}
