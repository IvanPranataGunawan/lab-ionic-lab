import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { Books } from '../books.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-utama',
  templateUrl: './utama.page.html',
  styleUrls: ['./utama.page.scss'],
})

export class UtamaPage implements OnInit {

  loadedBooks: Books[];
  // alertController: any;
  
  constructor(private booksServices: BooksService, private alertController: AlertController) { }

  ngOnInit() {
    this.loadedBooks = this.booksServices.listBook;
  }

  async favorite(b: Books) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Jadikan Favorite Buku ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ya',
          handler: () => {
            this.addList(b);
          }
        }
      ]
    });

    await alert.present();
  }

  addList(lists: Books){
    this.booksServices.addToMyBooks(lists);
  }

}
