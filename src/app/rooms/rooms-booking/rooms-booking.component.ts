import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map } from 'rxjs';


@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit{
  id!:string;

  
  id$ = this.router.paramMap.pipe(map(params => params.get('id')))

  constructor(private router: ActivatedRoute){}
  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id']
  // this.router.paramMap.subscribe(params => {params.get('id')})
    // this.router.params.subscribe(params => this.id = params['id'])
  }
}
