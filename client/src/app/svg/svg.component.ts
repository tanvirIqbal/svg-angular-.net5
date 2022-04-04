import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dimension } from '../_models/dimentsion';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.svg',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent {
  
  calculatePerimeter() {
    this.perimeter = (2 * (this.width + this.height))
  }

  @Input() width = 0;
  @Input() height = 0;
  @Output() DimensionSelected: EventEmitter<any> = new EventEmitter();
  fillColor = 'rgb(255, 0, 0)';
  isMouseDown: boolean = false;
  dimension: Dimension = new Dimension();
  @Input() perimeter: number = 0;
  mousedown($event: any) {
    this.isMouseDown = true;
  }
  mousemove($event: any) {
    if (this.isMouseDown) {
      if (this.width <= 10) {
        this.width = 50;
      }
      if (this.height <= 10) {
        this.height = 50;
      }
      this.width += $event.movementX;
      this.height += $event.movementY;
      this.calculatePerimeter();
    }

  }
  mouseup($event: any) {
    this.isMouseDown = false;
    if (this.width > 0 && this.height > 0) {
       this.dimension.height = this.height;
       this.dimension.width = this.width;
       this.DimensionSelected.emit(this.dimension);
    }
  }
}