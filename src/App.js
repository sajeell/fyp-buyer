import './App.css'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'

import ProductDetail from './MicroFrontends/Product/ProductDetail'
import Landing from './MicroFrontends/Landing/Landing'
import Products from './MicroFrontends/Products/Products'
import Login from './MicroFrontends/Login/Login'
import Footer from './MicroFrontends/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/antiques' element={<Products antiques={true} />} />
        <Route exact path='/handmade' element={<Products handmade={true} />} />

        <Route exact path='/product/detail/:id' element={<ProductDetail />} />

        <Route
          exact
          path='/landing'
          element={
            <>
              <Landing />
              <Footer />
            </>
          }
        />

        <Route exact path='/' element={<Login />} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
