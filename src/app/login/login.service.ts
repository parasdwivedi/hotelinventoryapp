import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedInUser: boolean = false;
  isLoggedInAdmin: boolean = false;



  constructor() { }

  login(email:string, password:string){
    if(email === 'admin' && password==='admin'){
      this.isLoggedInAdmin = true ;
      this.isLoggedInUser = true;
    }
    else if(email ==='user' && password==='user'){
      this.isLoggedInUser = true;
      this.isLoggedInAdmin = false;
    }
    return this.isLoggedInUser
  }
}
