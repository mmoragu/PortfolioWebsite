import { Component, OnInit } from '@angular/core';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  infoPagina!: InfoPagina;
  constructor(private _infoPaginaService: InfoPaginaService) {
    
  }
  
  ngOnInit() {
    this.infoPagina = this._infoPaginaService.info;
    console.log(this.infoPagina)

  }
}
