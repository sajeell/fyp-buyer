/*eslint-disable*/
import { useState } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import { RiseLoader } from 'react-spinners'

import ProductDetail from './MicroFrontends/Product/ProductDetail'
import Landing from './MicroFrontends/Landing/Landing'
import Products from './MicroFrontends/Products/Products'
import Login from './MicroFrontends/Login/Login'
import Footer from './MicroFrontends/Footer/Footer'
import Cart from './MicroFrontends/Cart/Cart'
import { useSelector } from 'react-redux'
import History from './MicroFrontends/Profile/History/History'
import Details from './MicroFrontends/Profile/Details/Details'
import PostRequest from './MicroFrontends/Bargain/PostRequest'
import Checkout from './MicroFrontends/Checkout/Checkout'
import IntermediaryProductDetail from './MicroFrontends/Product/IntermediaryProductDetail'

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  z-index: 10000;
  display: flex;
  justify-content: center;
  justify-self: center;
  left: 0;
  right: 0;
  top: 50vh;
`

function App() {
  const loading = useSelector((state) => state.loader.loading)
  let [color, setColor] = useState('#36D7B7')

  return (
    <div className='App'>
      <div className={loading ? 'parentDisable' : ''} width='100%'>
        <RiseLoader color={color} loading={loading} css={override} size={20} />
      </div>
      <Routes>
        <Route
          exact
          path='/antiques'
          element={
            <>
              <Products antiques={true} />
            </>
          }
        />
        <Route exact path='/handmade' element={<Products handmade={true} />} />
        <Route exact path='/product/detail/:id' element={<ProductDetail />} />

        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/history' element={<History />} />
        <Route exact path='/details' element={<Details />} />
        <Route exact path='/post-request' element={<PostRequest />} />
        <Route exact path='/checkout' element={<Checkout />} />
        <Route
          exact
          path='/intermediary/:id'
          element={<IntermediaryProductDetail />}
        />

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
