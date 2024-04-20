import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { GlobalService } from 'src/app/global.service';
import { NgFor } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.page.html',
    styleUrls: ['./videos.page.scss'],
    standalone: true,
    imports: [IonicModule, NgFor],
})
export class VideosPage implements OnInit {

  constructor(public global:GlobalService) { }

  ngOnInit() {
  }

  openWisdomVideo(id:string){

    Browser.open({url:id})
  }


  videos: any = [
    {
      id: "_oy_5gPxIMw"
    },
    {
      id: "NE7cIYI-lZw"
    },
    {
      id: "v4IQAD7ud0Q"
    },
    {
      id: "BlTS1um4bWE"
    },
    {
      id: "N0NOoU0-6EI"
    },
    {
      id: "XEKATmRfVxk"
    },
  ];
}
