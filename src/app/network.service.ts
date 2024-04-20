import { Injectable, OnInit } from '@angular/core';
import { Network } from '@capacitor/network';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

export enum ConnectionStatus {
  Offline,
  Online

}

@Injectable({
  providedIn: 'root'
})
export class NetworkService implements OnInit{

  private status: BehaviorSubject<any> = new BehaviorSubject(ConnectionStatus.Offline);

   constructor( private toastController: ToastController) {
    (async()=>{
      await Network.addListener('networkStatusChange', async (status:any) => {
        await this.updateNetworkStatus(status.connected?1:0);
      });
    })();

  }
  async ngOnInit(){
      this.initializeNetworkEvents();
      let status =   await this.logCurrentNetworkStatus() ? ConnectionStatus.Online : ConnectionStatus.Offline;
      this.status.next(status);
  }
  async  logCurrentNetworkStatus() {
    const status = await Network.getStatus();
   return status;
  };
  public async initializeNetworkEvents() {
      let status = await this.logCurrentNetworkStatus()? 1:0
      if (status === ConnectionStatus.Online) {
        this.updateNetworkStatus(ConnectionStatus.Offline);
      }

      if (status=== ConnectionStatus.Offline) {
        this.updateNetworkStatus(ConnectionStatus.Online);
      }
  }

  private async updateNetworkStatus(status: ConnectionStatus) {
    this.status.next(status);
    let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
    let toast = this.toastController.create({
      message: `You are now ${connection}`,
      duration: 3000,
      position: 'bottom'
    });
    toast.then(toast => toast.present());
  }

  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.status.asObservable();
  }

  public getCurrentNetworkStatus(): ConnectionStatus {
    return this.status.getValue();
  }
}
