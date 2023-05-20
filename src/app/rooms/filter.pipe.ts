import { Pipe, PipeTransform } from '@angular/core';
import { RoomList } from './rooms';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(rooms: RoomList[] | null, price: number): RoomList[] {
    if (rooms !== null) {
      return rooms.filter((rooms) => rooms.price >= price);
    }
    return [];
  }
}
