import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images2',
  templateUrl: './images2.page.html',
  styleUrls: ['./images2.page.scss'],
})
export class Images2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/* Galeria de imagenes  */
imagenes = [
  'assets/images/14.jpg',
  'assets/images/15.jpg',
];
}
