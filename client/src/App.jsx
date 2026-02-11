import { useEffect, useState } from 'react'


function app() {
const [mensaje, setMensaje] = useState('')

// Esto se ejecutará cuando apenas cargue la pagina
useEffect(() => {
  //Se usa fetch para probar la conexion del backend
  fetch('http://localhost:3000/')
  .then(response => response.text())
  .then(data => setMensaje(data))
  .catch(error => console.error("Error conectando al backend: ", error));
}, [])

return (
  <div style={{ padding: '20px', fontFamily: 'sans-serif'}}>
    <h1> GESTIÓN DE INVENTARIO </h1>
    <p> Estado del servidor: <strong>{mensaje || 'Cargando...'}</strong></p>
  </div>
)
}

export default App