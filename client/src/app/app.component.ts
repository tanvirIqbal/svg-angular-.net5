import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Dimension } from './_models/dimentsion';
import { AppService } from './_service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  dimension:Dimension = new Dimension();
  ngOnInit(): void {
    this.getDimension();
  }
  /**
   *
   */
  constructor(private appService: AppService) {
    
  }
  getDimension() {
    this.appService.getDimension().subscribe({
      next: (v) => {
        this.dimension = v;
      },
      error: (e) => {
        console.error(e);
        Swal.fire(
          '',
          'Something wrong is happened.',
          'error'
        )
      },
      complete: () => {
        console.info(this.dimension);
      }
    })
  }
  
  GetSelectedDimention($event:Dimension) {
    this.appService.saveDimension($event).subscribe({
      next: (v) => {
        
      },
      error: (e) => {
        console.error(e);
        Swal.fire(
          '',
          'Something wrong is happened.',
          'error'
        )
      },
      complete: () => {
        Swal.fire(
          '',
          'The dimension of rectangle is saved in the JSON file.',
          'success'
        )
      }
    })
  }
  
}
