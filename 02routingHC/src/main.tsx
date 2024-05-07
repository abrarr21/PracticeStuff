import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Home from './components/home/Home.tsx'
import './index.css'
import About from './components/about/About.tsx'
import Contact from './components/contact/Contact.tsx'
import User from './components/user/User.tsx'
import Github, { githubInfoLoader } from './components/github/Github.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader} 
        path='github' 
        element={<Github />} />
    </Route> 
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
