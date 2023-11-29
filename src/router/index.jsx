import { createBrowserRouter, redirect } from 'react-router-dom'
import Home from '../pages/HomePage/HomePage'
import Root from '../layouts/Root'
import Signup from '../pages/SignupPage/SignupPage'
import Login from '../pages/LoginPage/LoginPage'
import Usuario from '../pages/UsuarioPage/UsuarioPage'
import Perfil from '../components/Perfil/Perfil'


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
    /*loader: () => {
      if (!localStorage.getItem('token')) {
        return redirect('/') //If the user isn't logged in, we redirect to the login page.
      } else {
        return null
      }
    },*/
    children: [
      {
        path: '/app',
        element: <Usuario />,
      },
      {
        path:'/app/perfil',
        element: <Perfil />

      }
    ],
  },
])

export default router
