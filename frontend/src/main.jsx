import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter,  createRoutesFromElements } from 'react-router-dom'
import ChooseRolePage from './Components/ChooseRole/ChooseRolePage.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/SignUp/SignUp.jsx'
import Layout from './Layout.jsx'
import Error from './Components/Error/Error.jsx'
import HomePage from './Components/HomePage/HomePage.jsx'

const membersData = [
  {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    domain: "DS",
    year: "3rd Year",
    expertIn: ["React", "CSS", "JavaScript"],
    isAdmin: true,
    profileImage: "https://via.placeholder.com/150",
    socialMedia: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe"
    }
  },
  {
    id: 2,
    name: "John Hoe",
    department: "Engineering",
    domain: "CDP",
    year: "3rd Year",
    expertIn: ["React", "CSS", "JavaScript"],
    isAdmin: false,
    profileImage: "https://via.placeholder.com/150",
    socialMedia: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe"
    }
  },
  {
    id: 3,
    name: "Sayandip",
    department: "Engineering",
    domain: "Dev",
    year: "3rd Year",
    expertIn: ["React", "CSS", "JavaScript"],
    isAdmin: true,
    profileImage: "https://via.placeholder.com/150",
    socialMedia: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe"
    }
  },
];





const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<ChooseRolePage />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/member/login" element={<Login />} />
      <Route path="/member/signup" element={<Signup />} />
      <Route path="/admin/home" element={<HomePage members={membersData} role="admin" />} />
      <Route path="/member/home" element={<HomePage members={membersData} role="member" />} />
      <Route path='*' element={<Error/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
