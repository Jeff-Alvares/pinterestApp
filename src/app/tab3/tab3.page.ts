import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
messages = [
  {
    user: 'Jeffrey',
    createdAt: 1554090856000,
    msg: 'hey dame copia'
  },
  {
    user: 'Monica',
    createdAt: 1554090856000,
    msg: 'vaaa chido aqui esta'
  },
   {
    user: 'Jeffrey',
    createdAt: 1554090856000,
    msg: 'Graciasss!'
  }
];

currentUser= 'Jeffrey';
newMsg= ''; 

@ViewChild(IonContent) content: IonContent


  constructor() {}
  
sendMessage(){
  this.messages.push({
    user: 'Jeffrey',
    createdAt: new Date().getTime(),
    msg: this.newMsg
  });
  this.newMsg = '';
  setTimeout(() => {
    this.content.scrollToBottom(200);
  

  });
  
}
}