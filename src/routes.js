import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

// Import pages
import LandingPage from './pages/index.jsx'

// Error Boundary Component
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a href="/" className="text-blue-600 hover:text-blue-800 underline">
        Go back to home
      </a>
    </div>
  )
}

// Router configuration
export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
])

// Route constants for easy reference throughout the app
export const ROUTES = {
  HOME: '/',
}

export default router
