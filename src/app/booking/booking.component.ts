import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookinForm!: FormGroup;

  get guests(): FormArray {
    return this.bookinForm.get('guests') as FormArray;
  }

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const roomID = this.route.snapshot.paramMap.get('id');
    this.bookinForm = this.fb.group(
      {
        roomID: new FormControl(
          { value: roomID, disabled: false },
          { updateOn: 'blur', validators: [Validators.required] }
        ),
        guestEmail: [
          '',
          {
            updateOn: 'blur',
            validators: [Validators.required, Validators.email],
          },
        ],
        checkInDate: [''],
        checkOutDate: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: [''],
        guestName: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            CustomValidator.ValidateName,
          ],
        ],
        address: this.fb.group({
          addressLine1: [''],
          addressLine2: [''],
          City: [''],
          State: [''],
          Country: [''],
          ZipCode: [''],
        }),
        guests: this.fb.array([this.fb.group({ guestName: [''], age: [''] })]),
        tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
      }
      // { updateOn: 'change' }
    );
    // this.bookinForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe((data) => {});
    // });

    // this.bookinForm.valueChanges
    //   .pipe(mergeMap((data) => this.bookingService.bookRoom(data)))
    //   .subscribe((data) => console.log(data));

    // this.bookinForm.valueChanges
    //   .pipe(switchMap((data) => this.bookingService.bookRoom(data)))
    //   .subscribe((data) => console.log(data));

    this.bookinForm.valueChanges
      .pipe(exhaustMap((data) => this.bookingService.bookRoom(data)))
      .subscribe((data) => console.log(data));
  }

  addBooking() {
    // console.log(this.bookinForm.value)
    console.log(this.bookinForm.getRawValue());
    this.bookingService
      .bookRoom(this.bookinForm.getRawValue())
      .subscribe((data) => console.log(data));
    // this.bookinForm.reset();
  }

  getBookingData() {
    this.bookinForm.setValue;
  }

  addGuest() {
    this.guests.push(
      this.fb.group({ guestName: [''], age: new FormControl('') })
    );
  }

  addPassport() {
    this.bookinForm.addControl('passport', new FormControl(''));
  }
  deletePassport() {
    this.bookinForm.removeControl('passport');
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
