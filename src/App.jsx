import { useState } from 'react'
import NavbarComponets from './pages/components/Header'
import Dashboard from './pages/Home/Body'
import {Routes, Route} from 'react-router-dom'
import CreateCar from './pages/components/CreateCar'
import EditCar from './pages/components/EditCar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarComponets></NavbarComponets>
    <Routes>
          <Route path='/update/:id' element={<EditCar/>} />
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/create' element={<CreateCar/>}/>
        </Routes>
    </>
  )
}

export default App
