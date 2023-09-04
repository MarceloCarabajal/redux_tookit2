import React from 'react'
import { useSelector } from 'react-redux'

const Two = () => {
  const miNombreAhora = useSelector(state => state.unValor.miNombre)
  const miArrayAhora = useSelector(state => state.unValor.bibliotecas)
  return (
    <>
      <h1>{miNombreAhora}</h1>
      {
        miArrayAhora.map(valor => { 
          return (
          <div>{valor.nombre} {valor.inicio}</div>
          )})
      }
    </>
  )
}

export default Two