/*eslint-disable*/
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './components/Components.css'
import { store } from './redux/store'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('app')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
</Provider>)

reportWebVitals()
