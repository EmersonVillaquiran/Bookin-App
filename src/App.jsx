import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import HotelsIdPage from './pages/HotelsIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getHotelesThunk } from './store/states/hotels.slice'
import PrincipalHeader from './components/Shared/PrincipalHeader'
import ReservationPages from './pages/ReservationPages'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://booking-app-backend-w5w8.onrender.com/hotels'
    dispatch(getHotelesThunk(url))
  }, [])


  return (
    <div >
      <header>
        <PrincipalHeader/>
      </header>
      <article>   
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/hotels/:id' element={<HotelsIdPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/reservations' element={<ReservationPages/>}/>
          </Route>
        </Routes>
      </article>
    </div>
  )
}

export default App
