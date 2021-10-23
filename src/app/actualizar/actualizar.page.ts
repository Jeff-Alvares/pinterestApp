import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  constructor() { }

  /* Galeria de imagenes  */
  imagenes = [
    'assets/images/01.jpg',
    'assets/images/02.jpg',
    'assets/images/03.jpg',
    'assets/images/04.jpg',
    'assets/images/05.jpg',
    'assets/images/06.jpg',
  ];
  /* Galeria de imagenes  */
  imagenes1 = [
    'assets/images/08.jfif',
    'assets/images/09.jfif',
    'assets/images/04.jpg',
    'assets/images/05.jpg',
    'assets/images/08.jpg',
    'assets/images/01.jpg',
  ];



  ngOnInit() {
  }

}
