import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { RoomList } from './../rooms';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  [x: string]: any;
  roomList: RoomList[] = [];
  // headers = new HttpHeaders ({'token' : 'I am you favourite token digga'})

  getRooms$ = this.http.get<RoomList[]>('api/rooms').pipe(shareReplay(1))

  // roomList: RoomList[] = [{
  // //   roomNumber : '101',
  //   roomType : 'Delux',
  //   amenities : 'Fan, AC',
  //   price : 500,
  //   photos : 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill',
  //   checkinTime : new Date('11-Jul-2023'),
  //   checkoutTime : new Date('12-Jul-2023'),
  //   rating : 4.5,
  // },
  // {
  //   roomNumber : '201',
  //   roomType : 'Normal',
  //   amenities : 'Fan',
  //   price : 200,
  //   photos : 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg',
  //   checkinTime : new Date('11-Jul-2023'),
  //   checkoutTime : new Date('12-Jul-2023'),
  //   rating : 2.5,
  // },
  // {
  //   roomNumber : '301',
  //   roomType : 'Private',
  //   amenities : 'All',
  //   price : 2000,
  //   photos : 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg',
  //   checkinTime : new Date('11-Jul-2023'),
  //   checkoutTime : new Date('12-Jul-2023'),
  //   rating : 3.5,
  // }]
  
  constructor(private http: HttpClient) {
    // console.log('Room Service got init...')
   }

  getRooms(){
    return this.http.get<RoomList[]>('/api/rooms')
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room)
  }
  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room)
  }
  delete(id: string){
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`)
  }
  getPhotos(){
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress : true,
    });
    
    return this.http.request(request);
  }
}
