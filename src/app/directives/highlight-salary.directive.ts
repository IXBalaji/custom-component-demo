import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSalaryHighlight]'
})
export class HighlightSalaryDirective implements OnInit {
  @Input('appSalaryHighlight') salary!: number;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    if (this.salary > 40000) {
      this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }if (this.salary < 30000) {
      this.elementRef.nativeElement.style.backgroundColor = 'red';
    }
  }
}

