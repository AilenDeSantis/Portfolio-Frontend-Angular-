import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit():void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.courses = data.courses;
    });
  }
}
