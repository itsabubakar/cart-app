import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// pages
import History from './pages/History'
import Stats from './pages/Stats'
import Rootlayout from './layout/Rootlayout'
import { AnimatePresence } from 'framer-motion'

import { store } from './app/store'
import { Provider } from 'react-redux'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Rootlayout />}>
      {/* Home page */}
      <Route index element={<App />} />
      <Route path="history" element={<History />} />
      <Route path="stats" element={<Stats />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </Provider>
  </React.StrictMode>
)
