
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/login'


function App() {
  return (
    <UserContextProvider>
      <Profile />
      <Login />
    </UserContextProvider>
  )
}

export default App

 