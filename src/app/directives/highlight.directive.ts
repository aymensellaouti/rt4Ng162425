import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit{
  @Input()
  in = 'yellow';
  @Input()
  out = 'red';

  // permet de changer l'apparence et
  // le comportement d'un element du dom
  // Bech ngéri el background mta3 l'element eli bech ihostini
  @HostBinding('style.backgroundColor') bgc = this.out;
  constructor() {
    console.log('Highlight directive');
  }
  ngOnInit(): void {
    this.bgc = this.out;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
}
