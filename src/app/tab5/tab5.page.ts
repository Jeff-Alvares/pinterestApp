import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Listado{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private alertController: AlertController) { }

  listados: Listado[]=[
    { 
      icon: 'images',
      name: 'Fondos de pantalla',
      redirectTo: '/images1',
    },
    { 
      icon: 'images',
      name: 'Imagenes de Musica',
      redirectTo: '/images2',
    },
    { 
      icon: 'images',
      name: 'Imagenes de Deportes',
      redirectTo: '/images3',
    },
    { 
      icon: 'images',
      name: 'Imagenes de Programacion',
      redirectTo: '/images4',
    },
    { 
      icon: 'images',
      name: 'Imagenes de Arte',
      redirectTo: '#',
    },
    { 
      icon: 'images',
      name: 'Imagenes de geografia',
      redirectTo: '#',
    },
    { 
      icon: 'images',
      name: 'Imagenes de Autos',
      redirectTo: '#',
    },
    { 
      icon: 'images',
      name: 'Imagenes de Motocicletas',
      redirectTo: '#',
    },
    { 
      icon: 'images',
      name: 'Imagenes de Artesanias',
      redirectTo: '#',
    },
    { 
      icon: 'images',
      name: 'Imagenes de Tecnologia',
      redirectTo: '#',
    },
  ];

  ngOnInit() {
  }
  
  async mostrar(){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Cuidado',
        message: 'Has click en OK para disfrutar del contenido',
        buttons: ['OK']
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  }



