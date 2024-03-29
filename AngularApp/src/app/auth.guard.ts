import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private userService: UserService, private _router: Router){}

  canActivate(): boolean {
    if(this.userService.loggedIn())
    {
      return true;
    }
    else
    {
      this._router.navigate(['/api/open'])
      return false;
    }
  }
  
}
