import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent {


  successMessage : string = '';

  room:RoomList = {
    roomNumber : '',
    roomType : '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime : new Date(),
    checkoutTime : new Date(),
    rating: 0,
  }

  constructor(private roomService: RoomsService){}

  AddRoom(roomForm: NgForm){
    this.roomService.addRoom(this.room).subscribe(data => {this.successMessage = 'Successfully Romm Added'; roomForm.reset()})
  }
}
