import { Books } from './books.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class BooksService {
    private _books: Books[] = [
        new Books(
            'b1',
            'https://bookriot.com/wp-content/uploads/2014/08/HP_pb_new_6.jpg',
            'Harry Potter and the Half-Blood Prince',
            'Cerita tentang Harry Potter',
            'Novel',
            false
        ),
        new Books(
            'b2',
            'https://ssvr.bukukita.com/babacms/displaybuku/82139_f.jpg',
            'Sherlock Holmes Koleksi Kasus 1',
            'Cerita kasus yang ditangani Sherlock Holmes',
            'Novel',
            false
        ),
        new Books(
            'b3',
            'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/5/8/0/0_bc58c694-9d00-4329-915d-738924339a1e_700_1089.jpg',
            'One Piece',
            'Cerita tentang bajak laut Luffy',
            'Komik',
            false
        ),
        new Books(
            'b4',
            'https://i.pinimg.com/originals/bb/5e/9e/bb5e9e1a300d873fe86fc62e0bfb7d99.jpg',
            'Haikyuu',
            'Cerita tentang Hinata dalam bermain voli',
            'Komik',
            false
        ),
        new Books(
            'b5',
            'https://ssvr.bukukita.com/babacms/displaybuku/99480_f.jpg',
            'RPUL',
            'Rangkuman yang berisi pengetahuan umum',
            'Pengetahuan',
            false
        ),
        new Books(
            'b6',
            'https://bukubukularis.com/wp-content/uploads/2018/05/Top-Modul-RPAL.jpg',
            'RPAL',
            'Rangkuman yang berisi pengetahuan alam',
            'Pengetahuan',
            false
        ),
    ];

    private books: Books[] = [];

    constructor() {}

    get listBook(){
        return [...this._books];
    }

    getListBook(id: string){
        return {...this._books.find(p => {
            p.id === id;
        })}
    }

    addToMyBooks(book: Books){
        this.books.push(book);
    }

    removeFromMyBook(id: string){
        this.books = this.books.filter(p => {
            return p.id !== id;
        });
    }

    getMyBook(){
        return [...this.books];
    }

//     getListUKM(id: string){
//         return {...this._books.find(p => p.id === id)};
//     }

//     addToMyList(title){
//         this.listUkm.push(title);
//     }

//     getMyList(){
//         return [...this.listUkm];

//     }

//     removeFromMyList(title: string){
//         this.listUkm = this.listUkm.filter(p => {
//             return p.title === title;
//         })
//     }
}


