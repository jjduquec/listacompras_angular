import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';
@Component({
  selector: 'lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input()  productos:Producto[];
  @Output()  productoSeleccionado:EventEmitter<number>;
  constructor() { 
    this.productos=[];
    this.productoSeleccionado=new EventEmitter();
    
  }

  ngOnInit(): void {
  }

  onClick(indice:any){
    this.productoSeleccionado.emit(indice);


  }

}
