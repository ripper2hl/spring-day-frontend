import {Component, OnInit, SimpleChanges} from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import {AppComponent} from '../app.component';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-defunciones-por-entidad',
  templateUrl: './defunciones-por-entidad.component.html',
  styleUrls: ['./defunciones-por-entidad.component.css']
})
export class DefuncionesPorEntidadComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return '';
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'bar';
  public chartLegend = false;
  public pieChartPlugins = [pluginDataLabels];
  public chartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(private  appComponent: AppComponent ) { }

  ngOnInit() {
    this.pieChartLabels = this.appComponent.listaEntidadesDefuncionPie;
    this.pieChartData = this.appComponent.listaEntidadesCantidadDefuncionPie;
  }

  addSlice( entidad, cantidad ): void {
    this.pieChartLabels.push(entidad);
    this.pieChartData.push(cantidad);

  }

  public ngOnChanges(changes: SimpleChanges): void {
  }

}
