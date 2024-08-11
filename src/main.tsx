import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPanel from './layout/Main/MainPanel'
import ErrorElem from './layout/Error/Error'
import Add from './layout/Add/Add'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPanel />,
    errorElement: <ErrorElem />
  },
  {
    path: '/add',
    element: <Add />
  }, {
    path: '/all',
    element: <>123</>
  }
  
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
