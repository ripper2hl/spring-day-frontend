import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DefuncionesEntidadService {
  private url;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/modelo/defunciones/entidad/';
  }

  getCantidad( entidad ) {
    return this.http.get<any>(this.url + entidad );
  }
}

