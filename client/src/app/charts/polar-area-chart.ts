import { Component, Input } from '@angular/core';

@Component({
  selector: 'polar-area-chart',
  templateUrl: './polar-area-chart.html'
})
export class PolarAreaChartComponent {
  
  // PolarArea
  @Input('label') public polarAreaChartLabels:string[];
  @Input('valuesForChart') public polarAreaChartData:number[];
  public polarAreaLegend:boolean = true;

  public polarAreaChartType:string = 'polarArea';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
