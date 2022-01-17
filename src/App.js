import './App.css'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import ProductDetail from './MicroFrontends/Product/ProductDetail'
import Landing from './MicroFrontends/Landing/Landing'
import Products from './MicroFrontends/Products/Products'
import Login from './MicroFrontends/Login/Login'

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const token = useSelector((state) => state.user.token)

  useEffect(() => {
    if (token) {
      if (token.length > 0) {
        setAuthenticated(true)
      }
    }
  }, [token])

  return (
    <div className='App'>
      <Routes>
        <Route path='/antiques' element={<Products />} />
      </Routes>

      <Routes>
        <Route
          path='/product-detail'
          element={
            authenticated === true ? <ProductDetail /> : <Navigate to='/' />
          }
        />
      </Routes>

      <Routes>
        <Route
          exact
          path='/landing'
          element={authenticated === true ? <Landing /> : <Navigate to='/' />}
        />
      </Routes>

      <Routes>
        <Route
          exact
          path='/'
          element={
            authenticated === false ? <Login /> : <Navigate to='/landing' />
          }
        />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
