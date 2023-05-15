import { useRoutes  } from "react-router-dom";


import {SignIn} from '../assets/pages/SignIn/Index'
import {SignUp} from '../assets/pages/SignUp/Index'

function AuthRoutes(){
    const authRoute = useRoutes([
        {
          path: '/',
          element: <SignIn />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
      ]);
    
    return authRoute
}

export {AuthRoutes}