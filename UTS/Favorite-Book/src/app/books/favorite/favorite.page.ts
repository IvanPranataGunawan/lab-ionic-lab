import { BooksService } from './../books.service';
import { Books } from './../books.model';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  dataBook: Books[] = [];
  myBooks: import("e:/kuliah/SEMESTER7/Mobile2/Tugas Lab/UTS/Favorite-Book/src/app/books/books.model").Books[];

  constructor(private modalCTRL: ModalController, private bookService: BooksService) { }

  ngOnInit() {
    this.dataBook = this.bookService.listBook;
    this.myBooks = this.bookService.getMyBook();
    console.log(this.myBooks);
  }

  // onBookMyPlace(){
  //   this.modalCTRL.dismiss({message: 'This is dummy message!'}, 'confirm');
  //   this.bookService.addToMyBooks(this)
  // }

  ionViewWillEnter(){
    this.myBooks = this.bookService.getMyBook();
    console.log(this.myBooks);
  }

  onCancelMyBooks(id: string){
    this.bookService.removeFromMyBook(id);
    this.myBooks = this.bookService.getMyBook();
  }

}
