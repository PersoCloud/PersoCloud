import { Component, Input } from '@angular/core';

@Component({
  selector: 'radar-chart',
  templateUrl: './radar-chart.html'
})
export class RadarChartComponent {
  // Radar
  @Input('label') public radarChartLabels:string[];
  @Input('valuesForChart') public radarChartData:number[];
  public radarChartType:string = 'radar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
