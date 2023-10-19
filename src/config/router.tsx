import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import Admin from '../screens/admin/dashboard'
import Institute from '../screens/institute/dashboard'
import Student from '../screens/student/dashboard'
import Err404 from '../screens/publicRoutes/Err404'
export default function AppRouter(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='Admin/*' element={<Admin />}/>
            <Route path='Institute/*' element={<Institute />}/>
            <Route path='Student/*' element={<Student />}/>
            <Route path='*' element={<Err404 />}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}