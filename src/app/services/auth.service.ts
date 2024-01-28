import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise((accept, reject) => {
      if(
        credential.email == "darwin@gmail.com" &&
        credential.password == "db123"
      ){
        accept('Login Correcto')
      }else{
        accept('Login Incorrecto')
      }
    });
  }
}
