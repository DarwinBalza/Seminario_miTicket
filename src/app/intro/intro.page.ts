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
      title: "Tu Entrada al Entretenimiento Simplificado",
      image: "../../assets/images/image2.jpg",
      description: "Con una interfaz sencilla y fácil de usar, tuBoleta redefine la experiencia de compra de boletos. Su diseño intuitivo permite a los usuarios navegar de manera eficiente, facilitando la obtención de entradas para una amplia variedad de eventos deportivos.",
      texto_ayuda: "Desliza para continuar",
      class: "slide-1"
    },
    {
      title: "tuBoleta, Mucho Más que Boletos de Deportes",
      image: "../../assets/images/image1.png",
      description: "tuBoleta no se limita al fútbol; es tu ventana a un mundo de entretenimiento. Visualiza y adquiere boletos para eventos importantes de Tenis, Baloncesto y ¡Mucho Más!, todo en un solo lugar.",
      texto_ayuda: "Desliza para continuar",
      class: "slide-2"
    },
    {
      title: "Conectar Pasiones y Facilitar Experiencias Inolvidables",
      image: "../../assets/images/image3.jpg",
      description: "Olvídate de las preocupaciones al comprar tus boletas. Con nuestra aplicación, disfruta de una venta de boletas sin complicaciones. Elige tu deporte favorito y asegura tu lugar para vivir momentos inolvidables.",
      texto_ayuda: "¡Descubre, compra y vive con tuBoleta!",
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
      this.router.navigateByUrl('/login');
    } else {
      // El usuario aún no ha visto la introducción, seguir en la página de introducción
      console.log("Intro aún no vista");
    }
  }
  async IntroVista() {
    await this.storage.set('mostreLaIntro', true);
    this.router.navigateByUrl('/login');
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