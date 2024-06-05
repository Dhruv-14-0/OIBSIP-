import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SignUp from './pages/SignUpPage.jsx'
import Login from './pages/LoginPage.jsx'
import TributePage from './pages/TributePage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<SignUp/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='tribute' element={<TributePage/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
