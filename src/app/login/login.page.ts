import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mostrarPassword = false;
  loginForm: FormGroup;
  validation_messages = {
    email:[
      {type: "required", message: "Se necesita el email"},
      {type: "pattern", message: "email no valido"}
    ],
    password:[
      {type: "required", message: "Ingrese Contraseña"},
      { type: "minlength", message: "La contraseña debe tener todas las letras en 'minuscula' y al menos 5 caracteres." },
      {type: "pattern", message: "Contraseña no valida"}
    ]
  }
  loginMessage: any;
  constructor(
    private formBiulder: FormBuilder,
    private AuthService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
    ) { 
    this.loginForm = this.formBiulder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ]) 
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.pattern("^(?=.*[A-Za-z])(?=.*\d).{5,}$")
        ])
      )
    })
  }

  togglePasswordVisibility() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  ngOnInit() {
  }

  redirectToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  login(login_data: any) {
    console.log(login_data);
    this.AuthService.loginUser(login_data)
      .then(res => {
        this.loginMessage = res;
        this.storage.set('userLoggedIn', true);
        this.navCtrl.navigateForward('/home');
      })
      .catch(err => {
        this.loginMessage = err;
      });
  }

}
