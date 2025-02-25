import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom'
import './index.css'
import Contact from './Contact'
import Footer from './Footer'
import Products from './Product'
import Error from './Error';

function App() {
 
  return(
   <>
  <Navbar/>
  <Outlet/>
  <Footer/>
   </>
  )
  
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/products",
        element:<Products/>
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={appRouter}/>
)


export default App
