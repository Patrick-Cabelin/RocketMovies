import { Route , Routes } from "react-router-dom";

export {AuthRoutes}

import {SignIn} from '../assets/pages/SignIn'
import {SignUp} from '../assets/pages/SignUp'

function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
            
        </Routes>
    )
}
