import { listUKMService } from './../list_ukm.service';
import { Component, OnInit } from '@angular/core';
import { listUKM } from '../list_ukm.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  dataUKM: listUKM[] = [];

  constructor(private listUKMSvc: listUKMService) { }

  ngOnInit() {
    this.dataUKM = this.listUKMSvc.getListUKM();
    console.log(this.dataUKM);
    console.log('Coba');
  }

  ionViewWillEnter(){
    this.dataUKM = this.listUKMSvc.getMyList();
    console.log('2'+this.dataUKM);
  }

  removeData(title: string){
    console.log('terhapus');
    this.listUKMSvc.removeFromMyList(title);
    this.dataUKM = this.listUKMSvc.getListUKM();
  }

}
