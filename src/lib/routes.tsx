import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import Prototypes from '@/pages/Prototypes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/prototypes',
    element: <Prototypes />,
  },
])