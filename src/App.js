import {

  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'

import ProtectedRoute from './routing/ProtectedRoute'
import './App.css'
import Home from './components/Home/Home'
import Create from './components/Create/Create'


function App() {
  return (

    <div>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/create' element={<Create />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/user-profile' element={<ProfileScreen />} />
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>

  )
}

export default App
