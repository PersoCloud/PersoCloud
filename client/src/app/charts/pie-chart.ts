import { Component, Input } from '@angular/core';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.html'
})
export class PieChartComponent {
  // Pie
  @Input('label') public pieChartLabels:string[];
  @Input('valuesForChart') public pieChartData:number[];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
