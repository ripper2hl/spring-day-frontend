import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import {Label, SingleDataSet} from 'ng2-charts';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-defunciones-por-municipio',
  templateUrl: './defunciones-por-municipio.component.html',
  styleUrls: ['./defunciones-por-municipio.component.css']
})
export class DefuncionesPorMunicipioComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'line';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartData: SingleDataSet = [];

  constructor(private  appComponent: AppComponent) { }

  ngOnInit() {
    this.barChartLabels = this.appComponent.listaMunicipioDefuncionChartLabel;
    this.barChartData = this.appComponent.listaMunicipioDefuncionChart;
  }

}
