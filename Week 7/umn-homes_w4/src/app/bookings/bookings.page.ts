import { Booking } from './booking.model';
import { BookingService } from './booking.service';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBooking: Booking[];
  myBookings: import("e:/kuliah/SEMESTER7/Mobile2/Tugas Lab/Week 7/umn-homes_w4/src/app/places/place.model").Place[];
  

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBooking = this.bookingService.booking;
    this.myBookings = this.bookingService.getMyBookings();
    console.log(this.myBookings);
  }

  ionViewWillEnter(){
   this.myBookings = this.bookingService.getMyBookings();
   console.log(this.myBookings);
  }

  onCancelMyBooking(id: string, slidingEl: IonItemSliding){
    this.bookingService.removeFromMyBookings(id);
    this.myBookings = this.bookingService.getMyBookings();
    slidingEl.close();
  }

  onCancelBooking(offerId: string, slidingEl: IonItemSliding){
    slidingEl.close();
    console.log("terhapus");
  }

}
