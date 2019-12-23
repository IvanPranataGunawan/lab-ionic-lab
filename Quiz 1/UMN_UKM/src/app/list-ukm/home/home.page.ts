import { listUKM } from './../list_ukm.model';
import { listUKMService } from './../list_ukm.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  loadedListUKM: listUKM[];

  constructor(private listUKMSvc: listUKMService, private alertController: AlertController) { }

  ngOnInit() {
    this.loadedListUKM = this.listUKMSvc.listUKM;
  }

  async onAddList(title: string) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Beneran Mau Join?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Serius',
          handler: () => {
            this.addList(title);
          }
        }
      ]
    });

    await alert.present();
  }

  addList(title: string){
    this.listUKMSvc.addToMyList(title);
  }

}
