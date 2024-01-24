import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  producto! : ProductoDescripcion;
  productoId! :string;

  constructor(private router: ActivatedRoute,
    public productService: ProductosService) {

  }

  ngOnInit() {
    this.router.params.subscribe(parametros => {

      this.productService.getProducto(parametros['id']).subscribe((producto: ProductoDescripcion) => {
        this.producto=producto;
        
        this.productoId=parametros['id'];
      });
    });
  }

}
