import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DefuncionesEntidadService } from './services/defunciones.entidad.service';
import { DefuncionesMunicipioService } from './services/defunciones.municipio.service';
import { ChartsModule } from 'ng2-charts';
import { DefuncionesPorEntidadComponent } from './defunciones-por-entidad/defunciones-por-entidad.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DefuncionesPorMunicipioComponent } from './defunciones-por-municipio/defunciones-por-municipio.component';
import {ClasificacionFinalService} from './services/clasificacion.final.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DefuncionesPorEntidadComponent,
    DefuncionesPorMunicipioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DefuncionesEntidadService, DefuncionesMunicipioService, DefuncionesPorEntidadComponent, ClasificacionFinalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
