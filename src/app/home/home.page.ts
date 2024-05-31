import { NgFor } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import {
  IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader,
  IonIcon, IonMenuToggle, IonRow, IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from 'src/app/global.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    standalone: true,
    imports: [NgFor,
      TranslateModule,
    IonContent,IonRow,IonGrid,IonCol,IonButton,IonTitle,IonButtons,IonMenuToggle,IonToolbar,IonHeader,IonIcon
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    speed: 200,
  };
  value: any = 1;
  constructor(public global: GlobalService) { }

  ngOnInit() {
  }
  ionViewDidEnter() {

  }
  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
  data: any = [
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png',
    'assets/img/4.png',
    'assets/img/5.png',
    'assets/img/6.png',
    'assets/img/7.png'
  ];
}
