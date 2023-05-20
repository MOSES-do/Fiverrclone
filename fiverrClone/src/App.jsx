import React from 'react'
import './App.scss'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Add, Gig, Gigs, Home, Login, Message, Messages, MyGigs, Orders, Register } from './pages/'
function App() {

  const Layout = () => {
    return (
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/gigs", element: <Gigs /> },
        { path: "/add", element: <Add /> },
        { path: "/login", element: <Login /> },
        { path: "/message/:id", element: <Message /> },
        { path: "/gig/:id", element: <Gig /> },
        { path: "/messages", element: <Messages /> },
        { path: "/mygigs", element: <MyGigs /> },
        { path: "/orders", element: <Orders /> },
        { path: "/register", element: <Register /> }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
