import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  saldo: any = 100000;
  monto: number;
  customColor:any = '#0b395b';

  constructor( public alertController: AlertController ) { }
  
  async abonar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ABONO',
      subHeader: 'Saldo abonado con exito',
      message: 'Su abono se ha realizado con exito.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
