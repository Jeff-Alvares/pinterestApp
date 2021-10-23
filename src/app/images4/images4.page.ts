import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images4',
  templateUrl: './images4.page.html',
  styleUrls: ['./images4.page.scss'],
})
export class Images4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   /* Galeria de imagenes  */
   imagenes = [
    'assets/images/18.jpg',
    'assets/images/19.png',
    'assets/images/20.png',
    'assets/images/21.jpeg',
  ];
}
