import { NgIf, NgStyle } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TTSOptions, TextToSpeech } from '@capacitor-community/text-to-speech';
import {
  IonButton, IonButtons,
  IonCard,
  IonCol, IonContent, IonGrid, IonHeader,
  IonIcon, IonMenuToggle, IonRow, IonTitle, IonToolbar, PopoverController,
} from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
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
        TranslateModule,
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
  supportedLanguages:any;
  supportedVoices:any;
  platForm:any;
  ngOnInit() {

  /*  this.platForm = Capacitor.getPlatform();
    TextToSpeech.getSupportedLanguages().then(result => {
      this.supportedLanguages = result.languages;
    });
    TextToSpeech.getSupportedVoices().then(result => {
      this.supportedVoices = result.voices;
    });
*/
  }
  voiceLanguage:string='en-US';
  ionViewDidEnter(){
    const languageMap:any = {
      'ge': 'de-DE',
      'en': 'en-US',
      'es': 'es-MX',
      'it': 'it-IT',
      'fr': 'fr-FR'
    };
    this.voiceLanguage = languageMap[this.global.language] || 'eng-default';
  }
  togglePlay(){
    this.currentIcon=this.currentIcon==='play-circle'?'stop-circle':'play-circle';
    this.currentIcon==='stop-circle'?this.speak(): this.stop();
  }
  public async speak(): Promise<void> {
    let verseTxt:string = ``;
    let meaningTxt:string = ``;
    let explanation:string = ''
    if(this.global.bible[this.global.currentPage]?.verse){
      verseTxt = this.global.bible[this.global.currentPage]?.verse?.replace(/<[^>]+>/g, '');
    }
    if(this.global.bible[this.global.currentPage]?.meaning){
      meaningTxt = this.global.bible[this.global.currentPage]?.meaning?.replace(/<[^>]+>/g, '');
    }
    if(this.global.bible[this.global.currentPage]?.pageText){
      explanation = this.global.bible[this.global.currentPage]?.pageText?.replace(/<[^>]+>/g, '');
    }
    const options: TTSOptions = {
       text: verseTxt+' ' + meaningTxt+' '+explanation,
       lang: this.voiceLanguage,
      rate: 1,
      pitch: 1,
      volume: 1,
      category: 'ambient',
    };
    await TextToSpeech.speak(options);


    await TextToSpeech.speak(options);
  }
  currentIcon:string='play-circle';
  public async stop(): Promise<void> {
    this.currentIcon='play-circle';
    await TextToSpeech.stop();
  }

  public async openInstall(): Promise<void> {
    await TextToSpeech.openInstall();
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
