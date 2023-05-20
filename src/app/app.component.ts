import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Optional,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import { LoggerService } from './logger.service';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //template: "<h1>Hellllllllo World!</h1>",
  styleUrls: ['./app.component.css'],
  //styles: ['h1 {color:red}']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'Admin';
  constructor(
    @Optional() private loggerService: LoggerService,
    private initservice: InitService,
    private configService: ConfigService,
    private router: Router
  ) {
    console.log(initservice.config);
  }

  @ViewChild('name', { static: true }) name!: ElementRef;
  ngOnInit(): void {
    // this.name.nativeElement.innerText = "Hillton Hotel"
    // console.log(this.router.events.subscribe(event => console.log(event)))
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => console.log('Navigation started'));
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => console.log('Navigation completed'));
  }

  //   @ViewChild('user', {read: ViewContainerRef}) vcr!:ViewContainerRef;
  //   ngAfterViewInit() {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  //     componentRef.instance.numberOfRooms = 50;
  //   }
}
