import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonRow, IonSplitPane } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline, archiveOutline, archiveSharp, book, bookOutline, bookSharp, bookmarkOutline, bookmarkSharp, caretBack, caretBackCircleOutline, caretForward, caretForwardCircleOutline, close, document, documentText, heartOutline, heartSharp, home, homeOutline, information, list, mailOutline, mailSharp, menu, mic, paperPlaneOutline, paperPlaneSharp, removeCircleOutline, settings, settingsOutline, settingsSharp, shuffle, trashOutline, trashSharp, videocam, warningOutline, warningSharp } from 'ionicons/icons';
import { register } from 'swiper/element/bundle';
import { GlobalService } from './global.service';
import { ConnectionStatus, NetworkService } from './network.service';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink,IonRow,IonCol,IonSplitPane,IonContent,IonCol,IonRouterOutlet,
    RouterLinkActive, CommonModule, IonApp,
    IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle,
    IonItem, IonIcon, IonLabel, IonRouterOutlet],

})
export class AppComponent implements OnInit {

  sh:any=0;
  sm:any=0;
  constructor(
    public global:GlobalService,
    public router:Router,
    private networkService: NetworkService,
  ) {
    addIcons({ mailOutline,close,home,homeOutline,settingsOutline,settings,settingsSharp,book,documentText,bookOutline,bookSharp,information,caretBack,removeCircleOutline,addCircleOutline,shuffle,caretBackCircleOutline,caretForwardCircleOutline,caretForward,mic,videocam,menu, list,mailSharp,document, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });

    this.initializeApp();
  }

  async initializeApp() {
       this.networkService.onNetworkChange().subscribe((status: ConnectionStatus) => {
        if (status == ConnectionStatus.Online) {
          this.global.networkStatus="ONLINE";
        }else{
          this.global.networkStatus="OFFLINE";
        }
      });

  }

  ngOnInit() {
   this.global.mainItem=-1;

  }
  goToChapter(page:any){
    if(page.subs!=null){
       console.log("do nothing")
    }
    else {
      if(page.component===152){
        this.router.navigateByUrl('videos');
      }
      else{

      if(page.component=='-1'){
        this.router.navigateByUrl("home");
      }else{
        this.global.currentPage=page.component;
        this.router.navigateByUrl('content');
      }

    }

    }
  }
}
