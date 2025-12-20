import React from 'react'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div className='text-red-500'>
      navbar
    <Outlet/>
    </div>
  )
}

export default App