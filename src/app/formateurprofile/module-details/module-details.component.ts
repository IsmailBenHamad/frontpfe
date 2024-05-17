import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ModuleService } from 'src/app/services/module.service';
import { Module } from 'src/app/model/module';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-module-details',
  templateUrl: './module-details.component.html',
  styleUrls: ['./module-details.component.css']
})
export class ModuleDetailsComponent implements OnInit {
  private moduleSubject = new BehaviorSubject<Module | undefined>(undefined);
  module$: Observable<Module | undefined> = this.moduleSubject.asObservable();

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return id ? this.moduleService.getModuleById(id) : EMPTY;
      })
    ).subscribe(module => this.moduleSubject.next(module));
  }

  loadModule(): void {
    this.loadModule();
  }
  deleteDocument(moduleId: string, documentId: string): void {
    this.moduleService.removeDocumentFromModule(moduleId, documentId).subscribe({
      next: () => {
        console.log('Document deleted successfully');
        this.removeDocumentFromLocalState(documentId);
      },
      error: (error) => console.error('Failed to delete document:', error)
    });
  }

  private removeDocumentFromLocalState(documentId: string): void {
    const currentModule = this.moduleSubject.value;
    if (currentModule && currentModule.documents) {
      const updatedDocuments = currentModule.documents.filter(doc => doc._id !== documentId);
      this.moduleSubject.next({...currentModule, documents: updatedDocuments});
    }
  }

  openDocument(url: string): void {
    window.open(url, '_blank');
  }
}
