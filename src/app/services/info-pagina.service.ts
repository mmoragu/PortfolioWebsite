import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    })
  }
}
