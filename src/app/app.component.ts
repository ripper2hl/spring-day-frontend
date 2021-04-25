import {Component, ViewChild} from '@angular/core';
import {DefuncionesEntidadService} from './services/defunciones.entidad.service';
import {DefuncionesMunicipioService} from './services/defunciones.municipio.service';
import {ClasificacionFinalService} from './services/clasificacion.final.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private defuncionesEntidadService: DefuncionesEntidadService,
              private defuncionesMunicipioService: DefuncionesMunicipioService,
              private  clasificacionFinalService: ClasificacionFinalService) {
  }
  title = 'covid';

  listaEntidadesDefuncion = [];
  listaMunicipiosDefuncion = [];

  // Grafica estados
  listaEntidadesDefuncionPie = [];
  listaEntidadesCantidadDefuncionPie = [];

  // Grafica Municipios
  listaMunicipioDefuncionChart = [];
  listaMunicipioDefuncionChartLabel = [];

  listaClasificacionFinalEntidad = [];
  selectClasificacionFinal;

  entidades;

  ngOnInit(){

    this.entidades = this.defuncionesEntidadService.getEntidades();
    this.defuncionesEntidadService.getEntidades().forEach( entidad => {
      this.defuncionesEntidadService.getCantidad(entidad.id).subscribe( cantidad => {
        this.listaEntidadesDefuncion.push( { nombre: entidad.nombre, cantidad: cantidad } );
        this.listaEntidadesDefuncionPie.push( entidad.nombre);
        this.listaEntidadesCantidadDefuncionPie.push( cantidad );
      });
    });

    this.defuncionesMunicipioService.getCantidad().subscribe( defuncionesMunicipios => {
      this.listaMunicipiosDefuncion =  defuncionesMunicipios;

      defuncionesMunicipios.forEach( municipio => {

        this.listaMunicipioDefuncionChartLabel.push(municipio.nombre);
        this.listaMunicipioDefuncionChart.push(municipio.cantidad);

      });
    });


  }

  obtenerClasificacionFinal() {
    let clasificacionFinalEntidad = this.selectClasificacionFinal;
    this.clasificacionFinalService.getClasificacionesFinales().forEach( clasificacionFinal => {
      this.clasificacionFinalService.getSexo().forEach( sexo => {
        this.clasificacionFinalService.getCantidad( clasificacionFinalEntidad, clasificacionFinal.id, sexo.id ).subscribe(cantidad =>{
           this.listaClasificacionFinalEntidad.push({ clasificacionFinal, sexo, cantidad });
        });
      });
    });
  }
}
