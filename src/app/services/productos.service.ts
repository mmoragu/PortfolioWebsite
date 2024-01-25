import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = []


  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise((resolve, reject) => {
      this.http.get<Producto[]>("https://angular-html-1fffe-default-rtdb.firebaseio.com/productos_idx.json")
        .subscribe((resp: Producto[]) => {

          this.productos = resp;
          this.cargando = false;
          resolve(this.productoFiltrado);
        });
    });
  }

  getProducto(id: string) {
    return this.http.get<ProductoDescripcion>(`https://angular-html-1fffe-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });

    } else {
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string) {
    this.productoFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {

      let tituloLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 ||
      tituloLower.indexOf(termino)>=0) {
        this.productoFiltrado.push(prod);
      }

    });
  }
}
