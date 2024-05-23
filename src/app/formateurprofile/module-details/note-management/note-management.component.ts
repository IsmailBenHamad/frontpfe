import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatTableDataSource } from '@angular/material/table';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-note-management',
  templateUrl: './note-management.component.html',
  styleUrls: ['./note-management.component.css']
})
export class NoteManagementComponent implements OnInit {
  @Input() moduleId!: string;
  etudiants = new MatTableDataSource<any>([]);
  notesData: { [etudiantId: string]: { note: number; commentaire: string } } = {};

  displayedColumns: string[] = ['nom', 'prenom', 'email', 'note', 'commentaire', 'actions'];

  constructor(private noteService: NoteService, private moduleService: ModuleService) {}

  ngOnInit(): void {
    if (this.moduleId) {
      this.moduleService.getModuleById(this.moduleId).subscribe({
        next: (module) => {
          this.etudiants.data = module.etudiants;
          this.etudiants.data.forEach((etudiant: any) => {
            this.notesData[etudiant._id] = { note: 0, commentaire: '' };
          });
        },
        error: (error) => console.error('Error loading module:', error)
      });
    }
  }

  addNote = (etudiantId: string) => {
    const noteData = this.notesData[etudiantId];
    this.noteService.addNote(this.moduleId, etudiantId, noteData.note, noteData.commentaire).subscribe({
      next: (note) => {
        console.log('Note added:', note);
      },
      error: (error) => {
        console.error('Failed to add note', error);
      }
    });
  }
}
