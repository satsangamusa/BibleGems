import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { GlobalService } from 'src/app/global.service';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/network.service';
import { register } from 'swiper/element/bundle';
import { Capacitor } from '@capacitor/core';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
   
  sh:any=0;
  sm:any=0;
  constructor(
    private platform: Platform,
    public global:GlobalService,
    public router:Router,
    private networkService: NetworkService,
  ) {
    this.initializeApp();
  }

  initializeApp() { 
    this.platform.ready().then(async () => {
      this.networkService.initializeNetworkEvents();
      document.body.setAttribute('data-theme', 'light');
      document.body.classList.toggle('dark', false);
      if(Capacitor.getPlatform()==='android' || Capacitor.getPlatform()==='ios'){
        await SplashScreen.show({
          showDuration: 1000,
        });
        SplashScreen.hide();
        StatusBar.setStyle({
          style: Style.Light
        });
        
      }
  
    });
  }
 
  ngOnInit() {
   this.global.mainItem=-1;
   this.router.navigateByUrl("home");
     
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
        this.router.navigateByUrl(page.url);
      }

    }
      
    }
  }
}
