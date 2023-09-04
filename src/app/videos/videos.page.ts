import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(public global:GlobalService) { }

  ngOnInit() {
  }

  openWisdomVideo(id:any){
    let link ='https://www.youtube.com/watch?v='+id
    Browser.open({url:link});
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
