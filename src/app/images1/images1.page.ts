import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images1',
  templateUrl: './images1.page.html',
  styleUrls: ['./images1.page.scss'],
})
export class Images1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/* Galeria de imagenes  */
imagenes = [
  'assets/images/08.jfif',
  'assets/images/09.jfif',
];
}