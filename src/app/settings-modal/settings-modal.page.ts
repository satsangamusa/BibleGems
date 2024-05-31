import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonCol, IonContent, IonRange, IonRow, NavParams } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { GlobalService } from 'src/app/global.service';


@Component({
    selector: 'app-settings-modal',
    templateUrl: './settings-modal.page.html',
    styleUrls: ['./settings-modal.page.scss'],
    standalone: true,
    imports: [
        NgStyle,
        TranslateModule,
        FormsModule,
        IonContent,
        IonRange,
        IonRow,IonCol
    ],
})
export class SettingsModalPage implements OnInit {

  constructor(public navParams: NavParams,
    public global:GlobalService) { }

  ngOnInit() {
  }

}
