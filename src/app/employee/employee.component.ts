import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {

  constructor(@Self() private roomService: RoomsService){

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  empName: string = 'Hola Habibi';


}
