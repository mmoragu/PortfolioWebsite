import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get<Producto[]>("https://angular-html-1fffe-default-rtdb.firebaseio.com/productos_idx.json")
      .subscribe((resp:Producto[]) => {
        
        console.log(resp);

        this.cargando = false;
      });
  }
}