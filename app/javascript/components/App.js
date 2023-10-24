import React from 'react'
import Greeting from './greeting'
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rails-React</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
           <NavLink to="/greeting">
           greeting
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
       <Routes>
         <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>

  )
}