import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/HomePage/HomePage'
import Root from '../layouts/Root'
import Signup from '../pages/SignupPage/SignupPage'
import Login from '../pages/LoginPage/LoginPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
 /*  { path: '/info', element: <Info /> }, */
  {
    path: '/app',
    element: <Root />,
    children: [
      /* {
        path: '/app',
        element: < />,
      }, */
    ],
  },
])

export default router
