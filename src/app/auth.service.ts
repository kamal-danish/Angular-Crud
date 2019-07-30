import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getOneFunction() {
   
      setTimeout(() => console.log("Promise complete!"), 5000);
   
 }
 getSecondFunction() {
  
    setTimeout(() => console.log("Promise complete!"), 7000);
 
}
}
