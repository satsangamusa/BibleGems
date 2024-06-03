import { NgFor } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader,
  IonIcon, IonMenuToggle, IonRow, IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/global.service';
import { EnglishService } from '../english.service';
import { SpanishService } from '../spanish.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.page.html',
    styleUrls: ['./landing.page.scss'],
    standalone: true,
    imports: [NgFor,
      TranslateModule,
    IonContent,IonRow,IonGrid,IonCol,IonButton,IonTitle,IonButtons,IonMenuToggle,IonToolbar,IonHeader,IonIcon
    ],
    providers:[TranslateService],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingPage implements OnInit {

  slideOptions = {
    initialSlide: 1,
    speed: 200,
  };
  value: any = 1;
  countryCode:any={"country":"IN"};
  constructor(public global: GlobalService,public englishService:EnglishService,public spanishService:SpanishService,public transalteService:TranslateService, public router:Router) {
    fetch('https://api.country.is')
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        this.countryCode = isJson ? await response.json() : {"country":"IN"};
      if( this.countryCode?.country==='IN'){
        this.router.navigateByUrl('home');
       }
        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (this.countryCode && this.countryCode.message) || response.status;
            return Promise.reject(error);
        }
    })
    .catch(error => {
        console.error('There was an error!', error);
        this.router.navigateByUrl('home');
    });

   }

  ngOnInit() {
    this.transalteService.use(this.global.language);
  }

  ionViewWillEnter() {

  }
 changeLanguage(lc:string){
  this.global.language=lc;
  this.transalteService.use(lc);
  if(lc==='es'){
    this.global.bible=this.spanishService.bible;
    this.global.chapters=[ { title: "Cambiar De Idioma",componentName:"landing", component: 0, chapterNumber: 0, subs: null, icon: 'information' },...this.spanishService.chapters];
  } if(lc==='en'){
    this.global.bible=this.englishService.bible;
    this.global.chapters=[ { title: "Change Language",componentName:"landing", component: 0, chapterNumber: 0, subs: null, icon: 'information' },...this.englishService.chapters];
  }
  this.router.navigateByUrl('home');
 }
  getTranslatedText(key:string){
     let txt = '';
     this.transalteService.get(key).subscribe(data=>{
      txt=data;
     });
     return txt;
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
