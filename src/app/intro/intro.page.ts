import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage{

  slides = [
    {
      title: "TU PASAPORTE ALENTRETENIMIENTO",
      image: "../../assets/images/image2.png",
      description: "Bienvenido a nuestra aplicación, Descubre la comodidad de comprar tus boletas de cine en un solo lugar evitando las colas y asegurando tu asiento en cada función.",
      texto_ayuda: "Desliza para continuar",
      class: "slide-1"
    },
    {
      title: "NAVEGACIÓN SENCILLA, EXPERIENCIA COMPLETA",
      image: "../../assets/images/image1.png",
      description: "Explora nuestra interfaz intuitiva diseñada pensando en ti. Desde la selección de películas hasta la compra de boletas, cada paso es claro y eficiente.",
      texto_ayuda: "Desliza para continuar",
      class: "slide-2"
    },
    {
      title: "BOLETAS AL INSTANTE, SIN ESTRÉS",
      image: "../../assets/images/image3.png",
      description: "Olvídate de las preocupaciones al comprar tus boletas. Con nuestra aplicación, disfruta de una venta de boletas sin complicaciones. Elige tus películas favoritas, selecciona tu asiento preferido y asegura tu lugar para vivir momentos inolvidables en el cine.",
      texto_ayuda: "¡La magia del cine comienza aquí!",
      class: "slide-3"
    }
  ]

  constructor(
    private router: Router,
    private storage: Storage
  ) {}

  async ionViewDidEnter() {
    console.log("Comprobar intro");
    const mostreIntro = await this.storage.get('mostreLaIntro');
    if (mostreIntro) {
      // El usuario ya ha visto la introducción, redirigir a la página principal
      console.log("Introduccion vista");
      this.router.navigateByUrl('/intro');
    } else {
      // El usuario aún no ha visto la introducción, seguir en la página de introducción
      console.log("Intro aún no vista");
    }
  }
  async IntroVista() {
    await this.storage.set('mostreLaIntro', true);
    this.router.navigateByUrl('/home');
  }

  //Botones
  gotoHome(){
    console.log("Introduccion vista")
    this.IntroVista();
  }
  omitirIntro(){
    console.log("Introduccion vista")
    this.IntroVista();
  }
}