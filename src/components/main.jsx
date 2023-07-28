import React from 'react'
import Header from './header/main.jsx'
import { Outlet } from 'react-router-dom'
import "./main.scss"

function Father() {
  return (
    <main>
    <Header/>
    <Outlet/>
    </main>
  )
}

export default Father