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
        <Route path='/antiques' element={<Products />} />
      </Routes>

      <Routes>
        <Route path='/product-detail' element={<ProductDetail />} />
      </Routes>

      <Routes>
        <Route exact path='/landing' element={<Landing />} />
      </Routes>

      <Routes>
        <Route exact path='/' element={<Login />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
