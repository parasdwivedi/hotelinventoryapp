import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsComponent } from '../rooms.component';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private roomComponent: RoomsComponent) {}

  @Input() rooms1: RoomList[] | null = [];

  @Input() title: string = 'asds';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  @Input() price: any = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('shut up!');
  }

  ngOnDestroy(): void {
    console.log('Destroyed');
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
