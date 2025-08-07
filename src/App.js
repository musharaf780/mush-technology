import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from './components/ui/provider'
import { router } from './routes'
import './App.css'

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
