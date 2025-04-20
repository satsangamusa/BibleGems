import { NgFor } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionSheetController,
  IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader,
  IonIcon, IonMenuToggle, IonRow, IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/global.service';
import { EnglishService } from '../english.service';
import { FrenchService } from '../french.service';
import { GermanService } from '../german.service';
import { ItalianService } from '../italian.service';
import { JapaneseService } from '../japanese.service';
import { PortugeseService } from '../portugese.service';
import { RussiaService } from '../russia.service';
import { SpanishService } from '../spanish.service';
import { SwahiliService } from '../swahili.service';
import { ZuluService } from '../zulu.service';

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
  constructor(public global: GlobalService,public englishService:EnglishService,public germanService:GermanService,public italianService:ItalianService,
      public spanishService:SpanishService,
      public frenchService:FrenchService,
      public russiaService:RussiaService,
      public swahiliService: SwahiliService,
      public japaneseService: JapaneseService,
      public portugeseService: PortugeseService,
      public zuluService: ZuluService,
      private actionSheetCtrl: ActionSheetController,
      public transalteService:TranslateService, public router:Router) {

      }

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

  async presentLanguageActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Language',
      buttons: [
        {
          text: 'Español',
          handler: () => {

            this.changeLanguage('es'); // Spanish
            this.global.bible=this.spanishService.bible;
            this.global.chapters=this.spanishService.chapters

          }
        },
        {
          text: 'German',
          handler: () => {
            this.changeLanguage('de'); // German
            this.global.bible=this.germanService.bible;
            this.global.chapters=this.germanService.chapters
          }
        },
        {
          text: 'Russian',
          handler: () => {
            this.changeLanguage('ru'); // Russian
            this.global.bible=this.russiaService.bible;
            this.global.chapters=this.russiaService.chapters
          }
        },
        {
          text: 'French',
          handler: () => {
            this.changeLanguage('fr'); // French
            this.global.bible=this.frenchService.bible;
            this.global.chapters=this.frenchService.chapters
          }
        },
        {
          text: 'Zulu',
          handler: () => {
            this.changeLanguage('zu'); // Zulu
            this.global.bible=this.zuluService.bible;
            this.global.chapters= this.zuluService.chapters

          }
        },
        {
          text: 'Swahili',
          handler: () => {
            this.changeLanguage('sw'); // Swahili
            this.global.bible=this.swahiliService.bible;
            this.global.chapters= this.swahiliService.chapters
          }
        },
        {
          text: 'Japanese',
          handler: () => {
            this.changeLanguage('ja'); // Japanese
            this.global.bible=this.japaneseService.bible;
            this.global.chapters=this.japaneseService.chapters;

          }
        },
        {
          text: 'Portuguese',
          handler: () => {
            this.changeLanguage('pt'); // Portuguese
            this.global.bible=this.portugeseService.bible;
            this.global.chapters= this.portugeseService.chapters


          }
        },
        {
          text: 'English',
          handler: () => {
            this.changeLanguage('en'); // English
            this.global.bible=this.englishService.bible;
            this.global.chapters=this.englishService.chapters

          }
        },
        {
          text: 'Italian',
          handler: () => {
            this.changeLanguage('it'); // English
            this.global.bible=this.italianService.bible;
            this.global.chapters=this.italianService.chapters
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  changeLanguage(langCode: string) {
    // Assuming GlobalService has a method to change language
    if (this.global.language) {
      this.global.language = langCode;

      this.transalteService.use(langCode);
    } else {
      console.log('Language changed to:', langCode);
      // You may need to implement this method in your GlobalService
      // or use the TranslateService directly
    }
  }
}
