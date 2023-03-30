import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/router'

function App() {
  const [count, setCount] = useState(0)


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
