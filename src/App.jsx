import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './Signin'
import Dashboard from './Dashboard'
import Signup from './Signup'
import Forgetpassword from './Forgetpassword'
import Activated from './Activated'
import URLTable from './URLTable'
import Home from './Home'
import Resetpassword from './Resetpassword'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/forget-password' element={<Forgetpassword/>} />
      <Route path='/changePassword/:randomString' element={<Resetpassword/>} />
      <Route path='/activatelink/:token' element={<Activated/>}/>
      <Route path='/create-url' element={<Dashboard/>} />
      <Route path='/created-url' element={<URLTable/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
