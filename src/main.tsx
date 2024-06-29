import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Home from './pages/home/index.tsx'
import Settings from './pages/settings/index.tsx'
import Login from './pages/Login/index.tsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/csat/settings', element: <Settings /> }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
