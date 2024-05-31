import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { Platform } from '@ionic/angular';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalService } from '../global.service';
import { SettingsModalPage } from '../settings-modal/settings-modal.page';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.page.html',
    styleUrls: ['./videos.page.scss'],
    standalone: true,
    imports: [
      SettingsModalPage,
      CommonModule,
      TranslateModule,
      IonCard,
      FormsModule,
      IonCol,
      IonIcon,
      IonHeader,
      IonMenuButton,
      IonMenu,
      IonMenuToggle,
      IonToolbar,
      IonTitle,
      IonButton,
      IonButtons,
      IonContent,
      IonRow,
      IonGrid,
      IonSearchbar,
      IonList,
      IonItem,
      IonLabel,
    ],
})
export class VideosPage implements OnInit {

  private audioPointer!: BehaviorSubject<any>;

  public getAudioPointer(): Observable<any> {
    return this.audioPointer.asObservable();
  }
  public setAudioPointer(newValue: any): void {
    this.audioPointer.next(newValue);
  }
  constructor(
    public globaldata: GlobalService,
    private router: Router,
    private platform: Platform,
    public modalController: ModalController
  ) {
    this.width = this.platform.width();
    this.height = this.platform.height();
    for (let audio of this.audios) {
      if (audio.id) {
        audio.id =
        'https://ia601301.us.archive.org/26/items/gnanavahinivideo/' +
          audio.id;
      }
    }
  }
  gotoYouTube(ytUrl: any) {
    Browser.open({ url: ytUrl });
  }
  async presentModal() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: SettingsModalPage,
    });

    await modal.present();
  }

  async ionViewDidEnter() {

    this.platform.resize.subscribe(async () => {
      this.width = this.platform.width();
      this.height = this.platform.height();
      var sound: any = document.getElementById('gdVideoId');
      if (this.width && sound) {
        sound.width = this.width * (95 / 100);
      }
    });
    await this.getSelectedAudio();
    this.currentAudio = this.filteredAudios[0];
    this.audioPointer = new BehaviorSubject<any>(this.currentAudio);
    this.getAudioPointer().subscribe((value) => {
      this.currentAudio = value;
      let elm: any = document.getElementById('gdVideoId');
      while (elm?.firstChild) {
        elm.removeChild(elm.lastChild);
      }
      var sound: any = document.createElement('video');
      sound.id = 'video-player';
      sound.controls = 'controls';
      sound.autoplay = 'autoplay';
      sound.width = this.width * (95 / 100);
      sound.src = `${this.currentAudio?.id}`;
      sound.type = 'video/mp4';

      elm.appendChild(sound);
    });
    if (this.currentAudio) {
      this.selectedAudio(this.currentAudio);
    }
    //this.setAudioPointer(this.globaldata.movies[1]);
  }
  ionViewDidLeave() {
    if (!this.clickedSongDetails) {
      let elm: any = document.getElementById('gdVideoId');
      while (elm?.firstChild) {
        elm.removeChild(elm.lastChild);
      }
    }
  }
  currentAudio: any;
  ihtml: any;
  width: any;
  height: any;
  ngOnInit() {}
  filteredAudios: any = [];
  gdSearchText:any="Paraloka";
  async handleChange(event: any) {

      if (this.gdSearchText) {
        this.filteredAudios = this.audios.filter(
          (element: any) =>
            element.title?.includes(this.gdSearchText) ||
            element.eng
              ?.toUpperCase()
              ?.includes(this.gdSearchText?.toUpperCase())
        );
      }

  }

  async getSelectedAudio() {
      if (this.gdSearchText) {
        this.filteredAudios = this.audios.filter(
          (element: any) =>
            element.title?.includes(this.gdSearchText) ||
            element.eng
              ?.toUpperCase()
              ?.includes(this.gdSearchText?.toUpperCase())
        );

      }
  }
  selectedAudio(audio: any) {
    this.filteredAudios = null;
    this.currentAudio = audio;
    this.setAudioPointer(audio);
    const sound = document.querySelector('video');
    sound?.addEventListener('ended', (e: any) => {
      this.first(audio);
    });
  }
  clickedSongDetails: any = false;
  songText:any='';
  songDetails(st: any) {
    this.clickedSongDetails = true;
    this.songText = st;
    this.router.navigate(['song-details']);
  }
  first(nxtAudio: any) {
    if (nxtAudio) {
      let indx = this.audios.indexOf(nxtAudio);
      let len = this.audios.length;
      indx++;
      if (!(indx === len) && !(indx === len)) {
        this.currentAudio = this.audios[indx];
        this.setAudioPointer(this.audios[indx]);
      }
      const sound = document.querySelector('video');
      sound?.addEventListener('ended', (e: any) => {
        this.first(this.audios[indx]);
      });
    }
  }
  last(lstAudio: any) {
    if (lstAudio) {
      let indx = this.audios.indexOf(lstAudio);
      let len = this.audios.length;
      indx--;
      if (indx > 0 && indx < len - 1) {
        this.setAudioPointer(this.audios[indx]);
        this.currentAudio = this.audios[indx];
      }
      const sound = document.querySelector('video');
      sound?.addEventListener('ended', (e: any) => {
        this.last(this.audios[indx]);
      });
    }
  }
  ascendingFlag = true;
  veryFirst() {
    let len = this.audios.length;
    if (len > 0) {
      this.currentAudio = this.audios[0];
      this.setAudioPointer(this.audios[0]);
    }
    const sound = document.querySelector('video');
    sound?.addEventListener('ended', (e: any) => {
      if (len > 1) this.first(this.audios[0]);
    });
  }
  veryLast() {
    let len = this.audios.length;
    if (len >= 1) {
      this.currentAudio = this.audios[len - 1];
      this.setAudioPointer(this.audios[len - 1]);
    }
    const sound = document.querySelector('video');
    sound?.addEventListener('ended', (e: any) => {
      if (len > 2) this.last(this.audios[len - 1]);
    });
  }
  shuffle() {
    if (this.audios?.length > 1) {
      let audio = this.audios[Math.floor(Math.random() * this.audios.length)];
      this.currentAudio = audio;
      this.setAudioPointer(audio);
      const sound = document.querySelector('video');
      sound?.addEventListener('ended', (e: any) => {
        this.shuffle();
      });
    }
  }

  audios: any = [
    {
      eng: 'Paralokavaasaa Yesaa',
      url: null,
      ytUrl:"https://www.youtube.com/watch?v=N0NOoU0-6EI",
      id: "30ParalokavaasaaYesaa.mp4"

    },
    {
      eng: 'Vandanam Sree Raja Yogeeswaraa',
      url: null,
      ytUrl:"https://www.youtube.com/watch?v=N0NOoU0-6EI",
      id: "29VandanamSreeRajaYogeeswaraa.mp4"
    },
    {
      eng: 'Allah Ye Srushtikartha',
      url: null,
      ytUrl:"https://www.youtube.com/watch?v=N0NOoU0-6EI",
      id: "31AllahYeSrushtikartha.mp4"
    },

    {
      eng: 'Akasam Neevu',
      url: null,
      ytUrl:"https://www.youtube.com/watch?v=M-NUpkKdVZo",
      id: "62AkasamNeevu.mp4"
    },
    {
      eng: 'Ninnu neevu tagginchukora',
      url: null,
      ytUrl:"https://www.youtube.com/watch?v=9Y1wtZomqTg",
      id: "65Ninnuneevutagginchukoraa.mp4"
    },
    {
      eng: 'Kreesthu Nadachina Baata',
      url: null,
      ytUrl:"https://www.youtube.com/watch?v=eIxrqRLarQI",
      id: "66KreesthuNadachinaBaata.mp4"
    },
    {
      eng: 'Chudanivadu Chudalani',
      ytUrl:"https://www.youtube.com/watch?v=N0NOoU0-6EI",
      url: null,
      id: "89ChudanivaduChudalani.mp4"
    },
    {
      eng: 'Jeevaatme Oka Kanamga ',
      ytUrl:"https://www.youtube.com/watch?v=XEKATmRfVxk",
      url: null,
      id: "90JeevaatmeOkaKanamga.mp4"
    },
    {
      eng: 'Thandri Atma Swarupa',
      ytUrl:"https://www.youtube.com/watch?v=KcCy524b2tQ",
      url: null,
      id: "112ThandriAtmaswaroopa.mp4"
    },
    {
      eng: 'Tandri Kumar Parishuddhaatma(Father, Son, Holyspirit)',
      ytUrl:"https://www.youtube.com/watch?v=j1vWVh-RUFg",
      url: null,
      id: "113TandriKumaraParishuddhatma.mp4"
    },
    {
      eng: 'Jaya Jaya O Prabhu Yesu',
      ytUrl:"https://www.youtube.com/watch?v=VSEl8-G_ENM",
      url: null,
      id: "114JayaJayaOPrabhuYesu.mp4"
    },
    {
      eng: 'Idhi Matha Mayalo',
      ytUrl:"https://www.youtube.com/watch?v=C-prdtMnsbI",
      url: null,
      id: "122Idimatamayalo.mp4"
    },
    {
      eng: 'The Judgement Of God',
      ytUrl:"https://www.youtube.com/watch?v=OHkiv_9vWZ8",
      url: null,
      id: "127TheJudgementofGOD.mp4"
    },
    {
      eng: 'Rahasya Praarthana',
      ytUrl:"https://www.youtube.com/watch?v=G4unaSKBAas",
      url: null,
      id: "134RahasyaPrarthana.mp4"
    },
    {
      eng: 'Prabhu Yesu Jananam',
      ytUrl:"https://www.youtube.com/watch?v=qtSvW_dGxZA",
      url: null,
      id: "135PrabhuYesuJananam.mp4"
    },
    {
      eng: 'Ededu Deepa Sthambhalapai',
      ytUrl:"https://www.youtube.com/watch?v=2CKzZVmBVtw",
      url: null,
      id: "136YededuDeepaSthambalapai.mp4"
    },
  ];
}
