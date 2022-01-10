import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './MicroFrontends/Product/ProductDetail'
import Landing from './MicroFrontends/Landing/Landing'
import Products from './MicroFrontends/Products/Products'

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
        <Route exact path='/' element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App
