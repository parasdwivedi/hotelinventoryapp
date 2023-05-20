import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, inject } from '@angular/core';
import { Inject } from '@nestjs/common';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {


  @Input() hinvHover: string ='red';

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    console.log('The elemet is', this.element.nativeElement)
  }

  ngOnInit(){
    // this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.hinvHover)
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'steelblue')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.hinvHover)
  }
}
