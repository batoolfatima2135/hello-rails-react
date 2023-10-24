import React from 'react'
import Greeting from './greeting'
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function App() {
  return (
    <div>
       <NavLink to="/greeting">
           greeting
          </NavLink>
       <Routes>
         <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>

  )
}