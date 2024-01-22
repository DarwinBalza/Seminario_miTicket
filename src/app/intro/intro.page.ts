import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage{

  slides = [
    {
      title: "Tu Pasaporte al Entretenimiento",
      image: "../../assets/images/image1.png",
      description: "Bienvenido a nuestra aplicación, Descubre la comodidad de comprar tus boletas de cine en un solo lugar evitando las colas y asegurando tu asiento en cada función.",
      texto_ayuda: "Desliza para continuar",
      class: "slide-1"
    },
    {
      title: "Navegación Sencilla, Experiencia Completa",
      image: "../../assets/images/image2.png",
      description: "Explora nuestra interfaz intuitiva diseñada pensando en ti. Desde la selección de películas hasta la compra de boletas, cada paso es claro y eficiente.",
      texto_ayuda: "Desliza para continuar",
      class: "slide-2"
    },
    {
      title: "Boletas al Instante, Sin Estrés",
      image: "../../assets/images/image3.png",
      description: "Olvídate de las preocupaciones al comprar tus boletas. Con nuestra aplicación, disfruta de una venta de boletas sin complicaciones. Elige tus películas favoritas, selecciona tu asiento preferido y asegura tu lugar para vivir momentos inolvidables en el cine.",
      texto_ayuda: "¡La magia del cine comienza aquí!",
      class: "slide-3"
    }
  ]

  constructor(private router: Router) {}

  goToHome(){
    console.log("go to home");
    this.router.navigateByUrl('/home');
  }

}
