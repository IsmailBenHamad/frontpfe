import { Component, OnInit } from '@angular/core';
import { FormationPopulaireService } from 'src/app/services/formation-populaire.service';
import { FormationPopulaire } from '../model/FormationPopulaire';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  popularFormations: FormationPopulaire[] = [];

  constructor(private formationPopulaireService: FormationPopulaireService) { }

  ngOnInit(): void {
    this.formationPopulaireService.getAllPopularFormations().subscribe({
      next: (formations) => {
        this.popularFormations = formations;
      },
      error: (err) => console.error('Failed to load popular formations:', err)
    });
  }
}
