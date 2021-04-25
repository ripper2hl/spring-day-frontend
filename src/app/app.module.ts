import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DefuncionesEntidadService } from './services/defunciones.entidad.service';
import { DefuncionesMunicipioService } from './services/defunciones.municipio.service';
import { ChartsModule } from 'ng2-charts';
import { DefuncionesPorEntidadComponent } from './defunciones-por-entidad/defunciones-por-entidad.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    DefuncionesPorEntidadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FlexLayoutModule
  ],
  providers: [DefuncionesEntidadService, DefuncionesMunicipioService, DefuncionesPorEntidadComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
