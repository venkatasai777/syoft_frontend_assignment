
import './App.css'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/Api/user_registeration/api/user_registeration' Component={Signup} />
      <Route path='/' Component={Login} />
      <Route path='/dashboard' Component={Home} />
    </Routes>
      
    </>
  )
}

export default App
