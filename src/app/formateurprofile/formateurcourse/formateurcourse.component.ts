// formateurcourse.component.ts
import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/model/module';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-formateurcourse',
  templateUrl: './formateurcourse.component.html',
  styleUrls: ['./formateurcourse.component.css']
})
export class FormateurcourseComponent implements OnInit {
  modules: Module[] = [];

  constructor(private moduleService: ModuleService) {}  // Inject ModuleService instead of AuthService

  ngOnInit(): void {
    this.fetchModules();
  }

  fetchModules(): void {
    this.moduleService.getAllModules().subscribe({
      next: (modules: Module[]) => {  // Type the parameter explicitly to avoid TS7006
        this.modules = modules;
      },
      error: (error: any) => {  // Type the error parameter explicitly
        console.error("Failed to load modules", error);
      }
    });
  }
}
