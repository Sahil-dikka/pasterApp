import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import PageNoteFound from './components/PageNotFound';

function App() {
  
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:
        <div>
          <Navbar/>
          <Home/>
        </div>
      },
      {
        path:"/paste",
        element:
        <div>
           <Navbar/>
          <Paste/>
        </div>
      },
      {
        path:"/paste/:id",
        element:
        <div>
          <Navbar/>
          <ViewPaste/>
        </div>
      },
      {
        path:"*",
        element:
        <div>
        <Navbar/>
         <PageNoteFound/>
        </div>
      },
      
    ]
  )

  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
