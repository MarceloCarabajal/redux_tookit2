import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import One from '../components/One'
import Two from "../components/Two"
import { Button } from '@mui/material'


const MyRouter = () => {
  return (
    <div>
        <>
        <Router>
            <Link to="/one"><Button variant="outlined">Ir al One</Button></Link>
            <Link to="/two"><Button variant="outlined" >Ir al Two</Button></Link>
            <Routes>
                <Route path="/one" element={ <One /> } />
                <Route path="/two" element={ <Two /> } />

            </Routes>
        </Router>
        </>
    </div>
  )
}

export default MyRouter