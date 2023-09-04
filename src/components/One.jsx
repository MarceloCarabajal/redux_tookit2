import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { agregarUnValor, eliminarUnValor, guardarMiNombre, incrementarPuntuacion, modificarUnValor } from "../store/mySlices"

const One = () => {
  const dispatch = useDispatch()
  const miNombreAhora = useSelector( state => state.unValor.miNombre )
  const miPuntuacionAhora = useSelector( state => state.otroValor.puntuacion )
  const modificar =() => {
    dispatch(guardarMiNombre('Bob esponja'))
  }
  const incrementar =() => {
    dispatch(incrementarPuntuacion())
  }
  const modificarArray = () => {
    dispatch(modificarUnValor(
      {
        indice:0,
        nuevoNombre:"React",
        nuevoInicio:"Mayo de 2013"
      }
    ))
  }
const agregar = () => {
  dispatch(agregarUnValor(
    {
      indice:0,
      nuevoNombre:"Vue",
      nuevoInicio:2014
    }
  ))
}

const eliminar = () => {
  dispatch(eliminarUnValor("Vue"))
}

    return (
        <>
            <h1>{miNombreAhora}</h1>
            <h1>{miPuntuacionAhora}</h1>
            <Button variant="contained" onClick={modificar}>Modificar miNombre</Button>
            <Button variant="contained" onClick={incrementar}>Incrementar puntuacion</Button>
            <Button variant="contained" onClick={modificarArray}>Modificar un valor</Button>
            <Button variant="contained" onClick={agregar}>Agregar un valor</Button>
            <Button variant="contained" onClick={eliminar}>Eliminar un valor</Button>
        </>
  )
}

export default One