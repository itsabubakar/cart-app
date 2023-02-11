import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// pages
import History from './pages/History'
import Items from './pages/Items'
import Stats from './pages/Stats'
import Rootlayout from './layout/Rootlayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Rootlayout />}>
      {/* Home page */}
      <Route index element={<App />} />
      <Route path="history" element={<History />} />
      <Route path="items" element={<Items />} />
      <Route path="stats" element={<Stats />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
