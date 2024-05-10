// logged-in.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticatedUser()) {
      // Allow access if user is not authenticated (not logged in)
      return true;
    } else {
      // Redirect authenticated users to another page, such as the home page
      this.router.navigate(['/home']);
      return false;
    }
  }
}
