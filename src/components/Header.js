import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Scsss/Header.scss'
import { useGetDetailsQuery } from '../app/services/auth/authService'
import { logout, setCredentials } from '../features/auth/authSlice'
import { AiOutlineUser,AiOutlineShoppingCart } from 'react-icons/ai'
import { GiArchiveRegister } from 'react-icons/gi'

import { Link } from 'react-router-dom'
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetDetailsQuery('userDetails', {
    pollingInterval: 900000, // 15mins
  })

  useEffect(() => {
    if (data) dispatch(setCredentials(data))
  }, [data, dispatch])

  return (
    <header>

      <div className='header-parent'>
        <div className='contact-parent'>
          <div className='contact'>
            <img src="./images/2.gif" alt="" />
          </div>
        </div>
        <div className='pay'>
          <img src="./images/3.png" alt="" />
        </div>
        <div className='search-parent'>
          <div>
            <Link to='/' style={{textDecoration:'none',color:'black'}}>
              <h2>ASE SHOPPING</h2>
            </Link>
          </div>
          <div className='search-button'>
            <input type="search" placeholder='search here brand, category, products' />
            <button>Search</button>
          </div>
          <nav className='container navigation'>

            <div className='login'>
              <div className='icon'>
                <span><AiOutlineUser /></span>
                <Link to='/login' style={{textDecoration:'none',color:'black'}}> <span>Login</span></Link>
              </div>
              <div className='icon'>
                <span><GiArchiveRegister /></span>
                <Link to='/register' style={{textDecoration:'none',color:'black'}}> <span>Register</span> </Link>
              </div>
              <div className='icon'>
                <span><AiOutlineShoppingCart/></span>
                <Link to='/user-profile' style={{textDecoration:'none',color:'black'}}><span>Profile</span> </Link>
              </div>
              
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
