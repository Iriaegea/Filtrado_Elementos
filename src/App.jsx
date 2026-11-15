import { useState } from 'react';

const PRODUCTOS = [
  'Teclado mecánico',
  'Rato sen fíos',
  'Monitor 4K',
  'Auriculares bluetooth',
  'Alfombrilla RGB',
  'Cámara web HD'
];


function ListaProductos({texto, setTexto}){
  const productosFiltrados = PRODUCTOS.filter((producto) =>
    producto.toLowerCase().includes(texto.trim().toLowerCase())
  );
return (
  <>
    <ul>
        {productosFiltrados.length > 0 ? productosFiltrados.map((producto, i) => (
          
          <li key={i}>{producto}</li> )) : <li>Non se atopaon resultados para {texto}</li> } 
        
    </ul>
  </>
);
}




function BarraBusca({texto}){
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
      <BarraBusca texto={texto} ></BarraBusca>

      <ListaProductos texto={texto}></ListaProductos>
    </div>
    
  );
}