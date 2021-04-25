import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClasificacionFinalService {
  private url;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/modelo/entidad/';
  }

  getCantidad( entidad, clasificacionFinal, sexo ) {
    return this.http.get<any>(this.url + entidad + '?clasificacionFinal=' + clasificacionFinal + '&sexo=' + sexo );
  }

  getCantidadClasificacion1Mujer( entidad ) {
    return this.getCantidad(entidad, this.getClasificacionesFinales()[0].id, this.getSexo()[0].id );
  }

  getCantidadClasificacion1Hombre( entidad ) {
    return this.getCantidad(entidad, this.getClasificacionesFinales()[0].id, this.getSexo()[1].id );
  }

  getCantidadClasificacion1NoEspecificado( entidad ) {
    return this.getCantidad(entidad, this.getClasificacionesFinales()[0].id, this.getSexo()[2].id );
  }

  getClasificacionesFinales(){
    const clasificacionesFinales = [
      {
        "id": 1,
        "nombre": "CASO DE COVID-19 CONFIRMADO POR ASOCIACIÓN CLÍNICA EPIDEMIOLÓGICA",
        "descripcion": "Confirmado por asociación aplica cuando el caso informó ser contacto de un positivo a COVID-19 (y este se encuentra registrado en el SISVER) y: Al caso no se le tomo muestra o la muestra resultó no válida."
      },
      {
        "id": 2,
        "nombre": "CASO DE COVID-19 CONFIRMADO POR COMITÉ DE  DICTAMINACIÓN",
        "descripcion": "Confirmado por dictaminación solo aplica para defunciones bajo las siguientes condiciones:  Al caso no se le tomo muestra o sí se tomó muestra, pero la muestra resultó no válida."
      },
      {
        "id": 3,
        "nombre": "CASO DE SARS-COV-2  CONFIRMADO",
        "descripcion": "Confirmado aplica cuando: El caso tiene muestra de laboratorio o prueba antigénica y resultó positiva  a SARS-CoV-2, sin importar si el caso tienen asociación clínica epidemiológica."
      },
      {
        "id": 4,
        "nombre": "INVÁLIDO POR LABORATORIO",
        "descripcion": "Inválido aplica cuando el caso no tienen asociación clínico epidemiológica, ni dictaminación a COVID-19. Se le tomó muestra de laboratorio y esta resultó no válida."
      },
      {
        "id": 5,
        "nombre": "NO REALIZADO POR LABORATORIO",
        "descripcion": "No realizado aplica cuando el caso no tienen asociación clínico epidemiológica, ni dictaminación a COVID-19 y se le tomó muestra de laboratorio y esta no se procesó."
      },
      {
        "id": 6,
        "nombre": "CASO SOSPECHOSO",
        "descripcion": "Sospechoso aplica cuando:  El caso no tienen asociación clínico epidemiológica, ni dictaminación a COVID-19 y no se le tomó muestra, o se le tomó muestra de laboratorio y está pendiente de resultado, sin importar otra condición."
      },
      {
        "id": 7,
        "nombre": "NEGATIVO A SARS-COV-2",
        "descripcion": "Negativo aplica cuando el caso: 1. Se le tomo muestra de laboratorio y ésta resultó: negativa a SARS-COV-2 o positiva a cualquier otro virus respiratorio (Influenza, VSR, Bocavirus, otros) sin importar que este caso tenga asociación clínico epidemiológica o dictaminación a COVID-19. 2. Se le tomó muestra antigénica que resultó negativa a SARS-COV-2 y al caso no se le tomó muestra de laboratorio ni se le confirmo por asosiación epidemiológica o por dictaminación clínica epidemiológica."
      }
    ];
    return clasificacionesFinales;
  }

  getSexo(){
    const sexo = [
      {
        "id": 1,
        "nombre": "MUJER"
      },
      {
        "id": 2,
        "nombre": "HOMBRE"
      },
      {
        "id": 99,
        "nombre": "NO ESPECIFICADO"
      }
    ];
    return sexo;
  }
}

