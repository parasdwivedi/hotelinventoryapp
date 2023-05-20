import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string ='dasdsadasdasd';
  constructor() {}
  ngOnInit(): void {
   console.log('ngInit on header comp got called');
  }

}
