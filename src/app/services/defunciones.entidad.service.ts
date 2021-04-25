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

  getEntidades(){
     const entidades = [
      {
        id: '01',
        nombre: 'AGUASCALIENTES',
        abreviacion: 'AS'
      },
      {
        id: '02',
        nombre: 'BAJA CALIFORNIA',
        abreviacion: 'BC'
      },
      {
        id: '03',
        nombre: 'BAJA CALIFORNIA SUR',
        abreviacion: 'BS'
      },
      {
        id: '04',
        nombre: 'CAMPECHE',
        abreviacion: 'CC'
      },
      {
        id: '05',
        nombre: 'COAHUILA DE ZARAGOZA',
        abreviacion: 'CL'
      },
      {
        id: '06',
        nombre: 'COLIMA',
        abreviacion: 'CM'
      },
      {
        id: '07',
        nombre: 'CHIAPAS',
        abreviacion: 'CS'
      },
      {
        id: '08',
        nombre: 'CHIHUAHUA',
        abreviacion: 'CH'
      },
      {
        id: '09',
        nombre: 'CIUDAD DE MÉXICO',
        abreviacion: 'DF'
      },
      {
        id: 10,
        nombre: 'DURANGO',
        abreviacion: 'DG'
      },
      {
        id: 11,
        nombre: 'GUANAJUATO',
        abreviacion: 'GT'
      },
      {
        id: 12,
        nombre: 'GUERRERO',
        abreviacion: 'GR'
      },
      {
        id: 13,
        nombre: 'HIDALGO',
        abreviacion: 'HG'
      },
      {
        id: 14,
        nombre: 'JALISCO',
        abreviacion: 'JC'
      },
      {
        id: 15,
        nombre: 'MÉXICO',
        abreviacion: 'MC'
      },
      {
        id: 16,
        nombre: 'MICHOACÁN DE OCAMPO',
        abreviacion: 'MN'
      },
      {
        id: 17,
        nombre: 'MORELOS',
        abreviacion: 'MS'
      },
      {
        id: 18,
        nombre: 'NAYARIT',
        abreviacion: 'NT'
      },
      {
        id: 19,
        nombre: 'NUEVO LEÓN',
        abreviacion: 'NL'
      },
      {
        id: 20,
        nombre: 'OAXACA',
        abreviacion: 'OC'
      },
      {
        id: 21,
        nombre: 'PUEBLA',
        abreviacion: 'PL'
      },
      {
        id: 22,
        nombre: 'QUERÉTARO',
        abreviacion: 'QT'
      },
      {
        id: 23,
        nombre: 'QUINTANA ROO',
        abreviacion: 'QR'
      },
      {
        id: 24,
        nombre: 'SAN LUIS POTOSÍ',
        abreviacion: 'SP'
      },
      {
        id: 25,
        nombre: 'SINALOA',
        abreviacion: 'SL'
      },
      {
        id: 26,
        nombre: 'SONORA',
        abreviacion: 'SR'
      },
      {
        id: 27,
        nombre: 'TABASCO',
        abreviacion: 'TC'
      },
      {
        id: 28,
        nombre: 'TAMAULIPAS',
        abreviacion: 'TS'
      },
      {
        id: 29,
        nombre: 'TLAXCALA',
        abreviacion: 'TL'
      },
      {
        id: 30,
        nombre: 'VERACRUZ DE IGNACIO DE LA LLAVE',
        abreviacion: 'VZ'
      },
      {
        id: 31,
        nombre: 'YUCATÁN',
        abreviacion: 'YN'
      },
      {
        id: 32,
        nombre: 'ZACATECAS',
        abreviacion: 'ZS'
      },
      {
        id: 36,
        nombre: 'ESTADOS UNIDOS MEXICANOS',
        abreviacion: 'EUM'
      },
      {
        id: 97,
        nombre: 'NO APLICA',
        abreviacion: 'NA'
      },
      {
        id: 98,
        nombre: 'SE IGNORA',
        abreviacion: 'SI'
      },
      {
        id: 99,
        nombre: 'NO ESPECIFICADO',
        abreviacion: 'NE'
      }
    ];

     return entidades;
  }
}

