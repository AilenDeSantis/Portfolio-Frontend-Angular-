import { Component,  OnInit} from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: any;
  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit():void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experience = data.experience;
    });
  }
}