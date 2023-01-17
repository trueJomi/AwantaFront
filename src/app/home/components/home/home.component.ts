import { Component } from '@angular/core';
import { TransaccionesService } from 'src/app/core/services/transacciones.service';
import { ScaleType } from '@swimlane/ngx-charts'
import { OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  multi: any[];
  view: [number,number] = [400, 400];
  scheme:string="vivid"
  schemeType:ScaleType=ScaleType.Linear;

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  constructor(private transaccionService:TransaccionesService) {
    
  }
  ngOnInit(): void {
    this.multi=this.transaccionService.getForUser()
  }
  

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
