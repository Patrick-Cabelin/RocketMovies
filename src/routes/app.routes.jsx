import { Route , Routes } from "react-router-dom";
export {AppRoutes}

import {Home} from '../assets/pages/Home'
import {MoviePreview} from '../assets/pages/MoviePreview'
import {NewMovie} from '../assets/pages/NewMovie'
import {Profile} from '../assets/pages/Profile'

function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/moviepreview/:id" element={<MoviePreview/>}/>
            <Route path="/newmovie" element={<NewMovie/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )
}
