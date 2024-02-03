import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  event_list: any;
  categries_list: any;
  categriesid_list: any;

  constructor(
    private router: Router,
    private storage: Storage,
    private events: EventsService
    ) {}

  ionViewDidEnter(){
    this.events.getEvents().then(
      res =>{
        this.event_list = res;
        console.log("Eventos desde el servidor",this.event_list);
      }
    )
    console.log("Local Events",this.events.getLocalEvents().events);

    this.viewCategories();
    this.viewCategoriesid();
  }

  viewCategories(){
    this.events.getCategories().then(
      res =>{
        this.categries_list = res;
        console.log("Categorias desde el servidor", this.categries_list)
      }
    )
  }

  viewCategoriesid(){
    this.events.getCategoryById(1).then(
      res =>{
        this.categriesid_list =res;
        console.log("Categorias por su id desde el servidor", this.categriesid_list)
      }
    )
  }

  goToIntro(){
    console.log("ir a la intro");
    this.router.navigateByUrl('/intro');
    this.storage.set('mostreLaIntro', true);
  }

}
