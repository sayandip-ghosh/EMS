import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter,  createRoutesFromElements } from 'react-router-dom'
import ChooseRolePage from './Components/ChooseRole/ChooseRolePage.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/SignUp/SignUp.jsx'
import Layout from './Layout.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<ChooseRolePage />} />
      <Route path="admin/login" element={<Login />} />
      <Route path="member/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
