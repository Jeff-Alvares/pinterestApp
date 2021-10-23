import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  /* Corazones para LIKE */
  favorite = false;
  
  constructor() {}

  /* Modo oscuro */
  toggleTheme(event){ 
    if(event.detail.checked){ 
      document.body.setAttribute('color-theme','dark'); 
    }else{ 
     document.body.setAttribute('color-theme','light'); 
    } 
   } 
 

  /* Slides superior */
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  }
  /* Galeria de imagenes  */
  imagenes = [
    'assets/images/01.jpg',
    'assets/images/02.jpg',
    'assets/images/03.jpg',
    'assets/images/04.jpg',
    'assets/images/05.jpg',
    'assets/images/06.jpg',
    'assets/images/07.jpg',
    'assets/images/08.jpg',
    'assets/images/08.jfif',
    'assets/images/09.jfif',
  ];

ngOnInit() {
}
onClick(){
  this.favorite = ! this.favorite;
}
}

