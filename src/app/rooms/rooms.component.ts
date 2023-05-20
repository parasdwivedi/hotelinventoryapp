import { HeaderComponent } from './../header/header.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { Room, RoomList } from './rooms';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy
{
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = true;
  role1 = 'Admin';
  title = 'Room List';

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  stream = new Observable<any>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.complete();
    // observer.error('error');
  });
  selectedRoom!: RoomList;
  totalBytes = 0;

  subscription!: Subscription;

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  pricefilter = new FormControl<number>(0);

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      this.error$.next(err.message);
      return of([]);
    })
  );

  roomCount$ = this.roomsService.getRooms$.pipe(
    map((element) => element.length)
  );

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent)
  headeChildrenComponent!: QueryList<HeaderComponent>;
  constructor(
    private roomsService: RoomsService,
    private configService: ConfigService
  ) {}

  ngOnInit(): void {
    this.stream.subscribe((data) => console.log(data));
    // console.log(this.headerComponent)
    console.log('ROOM COUNT HERE');
    console.log();
    // this.subscription = this.roomsService.getRooms$.subscribe(rooms => {this.roomList = rooms});
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Req hab been made');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Request success');
          break;
        case HttpEventType.DownloadProgress:
          this.totalBytes = this.totalBytes + event.loaded;
          break;

        case HttpEventType.Response:
          console.log(event);
          break;
      }
    });
  }

  ngAfterViewChecked(): void {
    // console.log('HeyHey')
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
    // this.headeChildrenComponent.last.title = "First Title"
  }
  ngDoCheck(): void {
    // console.log('do check is called');
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Meine Fresse';
    // if (this.role1 == 'Admin') {this.role1 = 'User'}
    // else {this.role1 = 'Admin'}
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Cheap',
      amenities: 'ALl',
      price: 50,
      photos:
        'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill',
      checkinTime: new Date('11-Jul-2023'),
      checkoutTime: new Date('11-Jul-2023'),
      rating: 3.0,
    };
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    });
    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];
  }
  editRoom() {
    const room: RoomList = {
      roomNumber: '1',
      roomType: 'Cheap',
      amenities: 'ALl',
      price: 50,
      photos:
        'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill',
      checkinTime: new Date('11-Jan-2023'),
      checkoutTime: new Date('11-Jul-2023'),
      rating: 3.0,
    };
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }
  deleteRoom() {
    this.roomsService.delete('Cheap').subscribe((data) => {
      this.roomList = data;
    });
  }
}
