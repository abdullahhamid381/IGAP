import {

  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import HomeScreen from './screens/HomeScreen'
import ProtectedRoute from './routing/ProtectedRoute'
import './App.css'
import Category from './components/Category/Category'

function App() {
  return (
    
    <div>
        <Header />
      <main className='container content'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/category' element={<Category/>}/>
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
