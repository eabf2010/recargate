import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  saldo: any = 50000;
  monto: number;
  customColor:any = '#0b395b';

  constructor( public alertController: AlertController ) { }

  async recargar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'RECARGA',
      subHeader: 'Exitosa',
      message: 'Su recarga se ha realizado con exito.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
