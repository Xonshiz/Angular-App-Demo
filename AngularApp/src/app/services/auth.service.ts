import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  isLogged : boolean;

  constructor(private  http:Http,
    private router: Router) {
  }

  login(credentials) { 
    return this.http.get('../../assets/models/login.json');
  }

  logout() {
    let val = this.http.get('../../assets/models/logout.json');
    val.subscribe((result)=>
    {
      localStorage.clear();
      this.isLogged = false;
      this.router.navigate(['/login']);
    
    });
    
    
  }

  isLoggedIn() { 
    return false;
  }
}

