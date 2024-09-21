import { StrictMode, useState } from 'react'
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
import AdminDashboard from './Components/Dashboard/AdminDashboard.jsx'

const Main= () =>{

const membersData = [
  {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    domain: "DS",
    year: "3rd Year",
    expertIn: ["React", "CSS", "JavaScript"],
    isAdmin: true,
    performance: 85,
    attendance: 95,
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
    performance: 15,
    attendance: 21,
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
    performance: 36,
    attendance: 95,
    profileImage: "https://via.placeholder.com/150",
    socialMedia: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe"
    }
  },
  {
    id: 4,
    name: "Sahil",
    department: "Engineering",
    domain: "Dev",
    year: "3rd Year",
    expertIn: ["React", "CSS", "JavaScript"],
    isAdmin: false,
    performance: 80,
    attendance: 95,
    profileImage: "https://via.placeholder.com/150",
    socialMedia: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe"
    }
  },
  {
    id: 5,
    name: "Dinanta",
    department: "Engineering",
    domain: "Dev",
    year: "3rd Year",
    expertIn: ["React", "CSS", "JavaScript"],
    isAdmin: false,
    performance: 50,
    attendance: 71,
    profileImage: "https://via.placeholder.com/150",
    socialMedia: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe"
    }
  },
  {
    id: 6,
    name: "Deep",
    department: "Engineering",
    domain: "Dev",
    year: "3rd Year",
    expertIn: ["React", "CSS", "JavaScript"],
    isAdmin: true,
    performance: 81,
    attendance: 95,
    profileImage: "https://via.placeholder.com/150",
    socialMedia: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe"
    }
  },
];

const projectsData = [
  { id: 1, name: "Project Alpha", progress: 75, status: "Ongoing" },
  { id: 2, name: "Project Beta", progress: 100, status: "Completed" },
];

const eventsData = [
  { id: 1, name: "Annual Conference", date: "2024-09-30", location: "New York" },
  { id: 2, name: "Marketing Summit", date: "2024-10-15", location: "San Francisco" },
];

 const [role, setRole] = useState('')



const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout role={role} />} >
      <Route path="" element={<ChooseRolePage setRole={setRole} />} />
      <Route path="/admin/login" element={<Login role={role} />} />
      <Route path="/member/login" element={<Login role={role} />} />
      <Route path="/member/signup" element={<Signup />} />
      <Route path="/admin/home" element={<HomePage members={membersData} role={role} />} />
      <Route path="/member/home" element={<HomePage members={membersData} role={role} />} />
      <Route path="/admin/dashboard" element={<AdminDashboard 
              membersData={membersData} 
              projectsData={projectsData} 
              eventsData={eventsData} 
            />} />
      <Route path='*' element={<Error/>} />
    </Route>
  )
)

return (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

}
createRoot(document.getElementById('root')).render(
  <Main />
);
