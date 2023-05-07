import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../features/auth/authActions'
import { useEffect } from 'react'
import Error from '../components/Error'
import Spinner from '../components/Spinner'
import './Login.scss'
const LoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/user-profile')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  return (
    <div className="login-parent">

      <div className='form-parent'>
        <div className='star'>
          <img src="./images/star.png" alt="" />
         
        </div>
        <div>
        <h1>Welcome to Ase Shopping</h1>
        <p>Type your e-mail or phone number and password <br /> to log in a Ase account.</p>
        </div>
      <center>
      <form onSubmit={handleSubmit(submitForm)}>
          {error && <Error>{error}</Error>}
          <div className='form-group'>
            <label htmlFor='username'></label>
            <input
              type='text' placeholder='Enter Your Username'
              className='form-input'
              {...register('username')}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'></label>
            <input
              type='password' placeholder='Enter Your Password'
              className='form-input'
              {...register('password')}
              required
            />
          </div>
          <button type='submit' className='login' disabled={loading}>
            {loading ? <Spinner /> : 'Login'}
          </button>
          <br />
          <button type='submit' className='facebook' disabled={loading}>
            {loading ? <Spinner /> : 'Log in with Facebook'}
          </button>
        </form>
      </center>
      </div>
    </div>
  )
}

export default LoginScreen
