import { useRoutes , Routes } from "react-router-dom";

import {Home} from '../assets/pages/Home'
import {MoviePreview} from '../assets/pages/MoviePreview'
import {NewMovie} from '../assets/pages/NewMovie'
import {Profile} from '../assets/pages/Profile'

function AppRoutes(){
   const appRoute = useRoutes([
    {
        path:'/', 
        element:<Home/> , 
    },
    {
        path:'/preview/:id' ,
        element:<MoviePreview/> , 
    },
    {
        path:'/newmovie' ,
        element: <NewMovie/>, 
    },
    {
        path:'/profile',
        element: <Profile/>
    },
   ]) 
    return appRoute
}

export {AppRoutes}