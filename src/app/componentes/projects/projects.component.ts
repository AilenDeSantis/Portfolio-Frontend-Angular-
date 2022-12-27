import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit():void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.projects = data.projects;
    });
  }
}
