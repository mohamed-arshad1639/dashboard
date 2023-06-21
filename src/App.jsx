import React from 'react'

import Card from 'react-bootstrap/Card';
import { Route, Routes } from "react-router-dom"
import Home from './Home';
import Form from './Form';
export default function App() {
  return (

    <div>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/form" element={<Form/>} />
  </Routes>
    </div>
  )
}
        
