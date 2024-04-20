import { NgIf, NgStyle } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonButton, IonButtons,
  IonCard,
  IonCol, IonContent, IonGrid, IonHeader,
  IonIcon, IonMenuToggle, IonRow, IonTitle, IonToolbar, PopoverController,
} from '@ionic/angular/standalone';
import { GlobalService } from 'src/app/global.service';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';
import { ContentPipe } from '../content-pipe';
@Component({
    selector: 'app-content',
    templateUrl: './content.page.html',
    styleUrls: ['./content.page.scss'],
    standalone: true,
    providers:[PopoverController],
    imports: [
        NgIf,
        NgStyle,
        ContentPipe,
        ContentPipe,
        IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader,
        IonIcon, IonMenuToggle, IonRow, IonTitle, IonToolbar, IonCard
    ],
})
export class ContentPage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;
  constructor(public global: GlobalService,public pop:PopoverController
   ) {

  }

  ngOnInit() {
  }

  goToTop() {
    this.content.scrollToTop(0);
    this.global.currentPage=this.global.currentPage+1;
    }
  async openSettings(){

  const popover = await this.pop.create({
    component: SettingsModalPage,
    cssClass: 'custom-popover',
    translucent: true
  });
  return await popover.present();
}



}
