import { Component } from '@angular/core'; 
import { Producto } from './models/producto.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listacompras'; 
  productosSeleccionado:Producto[] 
  productosComprados:Producto[]

  constructor(){ 

    this.productosSeleccionado=[];
    this.productosComprados=[];

  }

  onProductoCreado($event:any){
    
    this.productosSeleccionado.push($event);


  } 

  onProdcutoSeleccionado($event:any){ 
    
    
    const prod=this.productosSeleccionado.splice($event,1);
    this.productosComprados.push(prod[0]);
    


  }

  onProductoNoSeleccionado($event:any){
    const prod=this.productosComprados.splice($event,1);
    this.productosSeleccionado.push(prod[0]);



  }



}
