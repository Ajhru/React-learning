import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/Auth'
import { login, logout } from './store/authSlice'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


function App() {

  const [loading, SetLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentuser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      }).finally(() => SetLoading(false))
  }, [])


  


  return !loading ? (
    <div className='min-screen-h flex flex-wrap contant-between bg-gray-400'> 
    <div className='w-full block'>
      <Header/>
      <main>
         <Outlet />
      </main>
      <Footer/>
    </div>
    
    </div>
  ) : null ;
}

export default App
