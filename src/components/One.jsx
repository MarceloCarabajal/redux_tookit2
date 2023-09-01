import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { guardarMiNombre } from "../store/mySlices"

const One = () => {
  const dispatch = useDispatch()
  const miNombreAhora = useSelector( state => state.unValor.miNombre )
  const modificar =() => {
    dispatch(guardarMiNombre('Bob esponja'))
  }
    return (
        <>
            <h1>{miNombreAhora}</h1>
            <Button variant="contained" onClick={modificar}>Modificar miNombre</Button>
        </>
  )
}

export default One