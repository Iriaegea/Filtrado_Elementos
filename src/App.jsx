import { useState } from 'react';

const PRODUCTOS = [
  'Teclado mecánico',
  'Rato sen fíos',
  'Monitor 4K',
  'Auriculares bluetooth',
  'Alfombrilla RGB',
  'Cámara web HD'
];

export default function BarraBuscar() {
  const [texto, setTexto] = useState('');

  const productosFiltrados = PRODUCTOS.filter((producto) =>
    producto.toLowerCase().includes(texto.trim().toLowerCase())
  );

  return (
    
    <div>
      <input
        type="text"
        placeholder="Buscar un producto..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <ul>
        {productosFiltrados.length > 0 ? productosFiltrados.map((producto, i) => (
          
          <li key={i}>{producto}</li> )) : <li>Non se atopaon resultados para {texto}</li> } 
        
        </ul>
    </div>
    
  );
}