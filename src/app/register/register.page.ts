import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 mostrarPassword1 = false;
  mostrarPassword2 = false; 

  registerForm: FormGroup;
  registrationSuccess = false;

  validation_messages = {
    firstName: [
      { type: 'required', message: 'Se necesita el nombre' },
    ],
    lastName: [
      { type: 'required', message: 'Se necesita el apellido' },
    ],
    email: [
      { type: 'required', message: 'Se necesita el correo electrónico' },
      { type: 'pattern', message: 'Correo electrónico no válido' },
    ],
    password: [
      { type: 'required', message: 'Ingrese una contraseña' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 5 caracteres' },
      { type: 'pattern', message: 'La contraseña debe contener al menos una letra y un número' },
    ],
    confirm_password: [
      { type: 'required', message: 'Confirme la contraseña' },
    ]
  }

  registerMessage: any;

  constructor(
    private formBiulder: FormBuilder,
    private navCtrl: NavController,
    private AuthService: AuthService,
    private storage: Storage
  ) { 
    this.registerForm = this.formBiulder.group({
      firstName: new FormControl(
        "", 
        Validators.required),

      lastName: new FormControl(
        "", 
        Validators.required),

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
      ),
      confirm_password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
        ])
      )
    }, { validators: this.passwordMatchValidator.bind(this) });
  }

  ngOnInit() {
  }

  mostrar_Password1() {
    this.mostrarPassword1 = !this.mostrarPassword1;
  }

  mostrar_Password2() {
    this.mostrarPassword2 = !this.mostrarPassword2;
  }

  redirectToLogin(){
    this.navCtrl.navigateForward('/login');
  }

  register(register_data: any) {
    console.log("Registro exitoso", register_data);
    this.storage.set('registeredUserData', register_data);
    this.navCtrl.navigateForward('/login');
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')!.value;
    const confirm_password = group.get('confirm_password')!.value;
    return password === confirm_password ? null : { passwordMismatch: true };
  }

}

// this.registrationSuccess = true;