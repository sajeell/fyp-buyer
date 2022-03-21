import './App.css'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'

import ProductDetail from './MicroFrontends/Product/ProductDetail'
import Landing from './MicroFrontends/Landing/Landing'
import Products from './MicroFrontends/Products/Products'
import Login from './MicroFrontends/Login/Login'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/antiques' element={<Products />} />

        <Route exact path='/product-detail' element={<ProductDetail />} />

        <Route exact path='/landing' element={<Landing />} />

        <Route exact path='/' element={<Login />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
