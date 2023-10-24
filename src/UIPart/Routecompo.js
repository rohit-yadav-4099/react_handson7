import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import EditStudent from './EditStudent'
import AddStudent from './AddStudent'

function RouteCompo() {
    return (
        <>
            <BrowserRouter>
                <div className='navbar'>
                    <ul type='none'>
                        <li><NavLink className='home' to='/'>Home</NavLink></li>
                        <li><NavLink className='student' to='/student'>Student</NavLink></li>
                        <li><NavLink className='contact' to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/student' element={<Student />} />
                    <Route path='/editstudent/:id' element={<EditStudent />} />
                    <Route path='addstudent' element={<AddStudent />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default RouteCompo