import { Component, Input } from '@angular/core';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.html'
})
export class DoughnutChartComponent {
  // Doughnut
  @Input('label') public doughnutChartLabels:string[];
  @Input('valuesForChart') public doughnutChartData:number[];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
