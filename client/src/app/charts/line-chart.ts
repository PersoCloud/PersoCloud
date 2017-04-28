import { Component, Input } from '@angular/core';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.html'
})
export class LineChartComponent {
  // Radar
  @Input('label') public lineChartLabels:string[];
  @Input('valuesForChart') public lineChartData:number[];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
