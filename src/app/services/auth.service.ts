import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise((accept, reject) => {
      if(
        credential.email === "darwin@gmail.com" &&
        credential.password === "db123"
      ){
        accept('Login Correcto')
      }else{
        reject('Login Incorrecto')
      }
    });
  }


  registerUser(credential: any){
    return new Promise((accept, reject) => {
      if(
        credential.firstName &&
        credential.lastName &&
        credential.email &&
        credential.password &&
        credential.confirm_password
      ){
        accept('Registro Correcto')
      }else{
        reject('Registro Incorrecto')
      }
    });

  }
}
