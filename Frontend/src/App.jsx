import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainArea from './components/MainArea'
import AddStudent from './components/AddStudent'
import Alldetail from './components/AllStudents'
import {Toaster} from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='App'>
      <Toaster  position="top-center" />
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<MainArea />}/>
        <Route path='AddNew' element={<AddStudent />}/>
        <Route path='ViewAll' element={<Alldetail />}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App