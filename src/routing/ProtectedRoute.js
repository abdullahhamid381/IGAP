import { useSelector } from 'react-redux'
import { NavLink, Outlet, Route } from 'react-router-dom'
import Create from '../components/Create/Create'
import Home from '../components/Home/Home'

const ProtectedRoute = () => {

  const accessToken = localStorage.getItem('accessToken')
  // show unauthorized screen if no accessToken is found in localstorage
  if (!accessToken || accessToken === 'undefined' || accessToken === null || accessToken === "") {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to='/login'>Login</NavLink> to gain access
        </span>
      </div>
    )
  }

  return <Outlet />
}

export default ProtectedRoute
