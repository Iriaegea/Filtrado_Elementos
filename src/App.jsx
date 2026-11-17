import { useState } from 'react';
// color y conexion
import {products} from './productos'

// const PRODUCTOS = [
//   'Teclado mecánico',
//   'Rato sen fíos',
//   'Monitor 4K',
//   'Auriculares bluetooth',
//   'Alfombrilla RGB',
//   'Cámara web HD'
// ];


function ListaProductos({texto}){
  const productosFiltrados = products.filter((p) =>
    p.details.specifications.connection.toLowerCase().includes(texto.trim().toLowerCase()) ||
    p.details.specifications.color.toLowerCase().includes(texto.trim().toLowerCase()) ||
    p.name.toLowerCase().includes(texto.trim().toLowerCase()))

return (
  <>
    <ul>
        {console.log(productosFiltrados.length)}
        
        {productosFiltrados.length > 0 ? productosFiltrados.map((p, i) => (
          
          <li key={i}>Nombre: {p.name} - Conexión: {p.details.specifications.connection} - Color: {p.details.specifications.color} </li> 

        
        )) 
          :
           <li>Non se atopaon resultados para {texto}</li> } 
        
    </ul>
  </>
);
}




function BarraBusca({texto, setTexto}){
  return (
    <>
    <input type="text" value={texto} onChange={(evento) =>setTexto(evento.target.value)}>
    </input>
    </>
  );
}


export default function BuscarProductos() {
  const [texto, setTexto] = useState('');

  

  return (
    
    <div>
      <BarraBusca texto={texto} setTexto={setTexto} ></BarraBusca>

      <ListaProductos texto={texto}></ListaProductos>
    </div>
    
  );
}