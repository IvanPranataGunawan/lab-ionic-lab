import { listUKM } from './list_ukm.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class listUKMService {
    private _listUKM: listUKM[] = [
        new listUKM(
            'l1',
            'Basket',
            'Basket adalah UKM Bola Basket'
        ),
        new listUKM(
            'l2',
            'Drama',
            'Drama adalah UKM Drama'
        ),
        new listUKM(
            'l3',
            'Volly',
            'Drama adalah UKM Drama'
        ),
        new listUKM(
            'l4',
            'Futsal',
            'Futsal adalah UKM Futsal'
        ),
    ];

    get listUKM(){
        return [...this._listUKM];
    }

    private listUkm: listUKM[] = [];

    constructor() {}

    getListUKM(id: string){
        return {...this._listUKM.find(p => p.id === id)};
    }

    addToMyList(title){
        this.listUkm.push(title);
    }

    getMyList(){
        return [...this.listUkm];

    }

    removeFromMyList(title: string){
        this.listUkm = this.listUkm.filter(p => {
            return p.title === title;
        })
    }
}


